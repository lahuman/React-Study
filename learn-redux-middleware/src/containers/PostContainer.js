import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, clearPost } from "../modules/posts";
import Post from "../components/Post";

export default ({ postId }) => {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!!</div>;
  if (!data) return null;
  return <Post post={data} />;
};
