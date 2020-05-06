import React, { createContext, useReducer, useContext } from "react";
import * as api from "./api";
import createAsyncDispatcher, {
  createAsyncHandler,
  initialAsyncState,
} from "./asyncActionUtils";

const initalState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

// GET_USERS
// GET_USERS_SUCCESS
// GET_USERS_ERROR
// GET_USER
// GET_USER_SUCCESS
// GET_USER_ERROR

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action);
    default:
      throw new Error("Unhandled action type", action.type);
  }
};

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initalState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

const useMyContext = (ctx) => {
  const context = useContext(ctx);
  if (!context) {
    throw new Error("Cannot find UsersProvider");
  }
  return context;
};

export const useUsersState = () => useMyContext(UsersStateContext);
export const useUsersDispatch = () => useMyContext(UsersDispatchContext);

// const getUsers = async (dispatch) => {
//   dispatch({ type: "GET_USERS" });
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
//   } catch (e) {
//     dispatch({ type: "GET_USERS_ERROR", error: e });
//   }
// };
// const getUser = async (dispatch, id) => {
//   dispatch({ type: "GET_USER" });
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     dispatch({ type: "GET_USER_SUCCESS", data: response.data });
//   } catch (e) {
//     dispatch({ type: "GET_USER_ERROR", error: e });
//   }
// };

// export { UsersProvider, useUsersState, useUsersDispatch, getUsers, getUser };
export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
