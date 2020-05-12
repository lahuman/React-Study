import * as postAPI from "../api/posts";
import { reducerUtils } from "../lib/asyncUtils";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });
  // API를 호출
  try {
    const posts = await postAPI.getPosts();
    // 성공 했을때
    dispatch({ type: GET_POSTS_SUCESS, posts });
  } catch (e) {
    // 실패 했을때
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });
  // API를 호출
  try {
    const post = await postAPI.getPostById(id);
    // 성공 했을때
    dispatch({ type: GET_POST_SUCESS, post });
  } catch (e) {
    // 실패 했을때
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCESS:
      return {
        ...state,
        post: reducerUtils.success(action.post),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
};
