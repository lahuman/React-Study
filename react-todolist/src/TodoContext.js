import React, { useReducer, createContext, useContext, useRef } from "react";

const initalTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

/*
  CREATE
  TOGGLE
  REMOVE
*/
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initalTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const useMyContext = (ctx) => {
  const context = useContext(ctx);
  if (!context) {
    throw new Error(`Cannot find Context : ${ctx}`);
  }
  return context;
};
const useTodoState = () => useMyContext(TodoStateContext);
const useTodoDispatch = () => useMyContext(TodoDispatchContext);
const useTodoNextId = () => useMyContext(TodoNextIdContext);

export { TodoProvider, useTodoState, useTodoDispatch, useTodoNextId };
