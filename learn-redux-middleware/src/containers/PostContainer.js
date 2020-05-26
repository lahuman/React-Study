import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHome, printState } from "../modules/posts";
import Post from "../components/Post";
import { reducerUtils } from "../lib/asyncUtils";

export default ({ postId }) => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data) return;

    dispatch(getPost(postId));
  }, [dispatch, postId, data]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생!!</div>;
  if (!data) return null;
  return (
    <>
      <button onClick={() => dispatch(goToHome())}> 홈으로 이동 </button>
      <button onClick={() => dispatch(printState())}>상태 출력</button>
      <Post post={data} />
    </>
  );
};
