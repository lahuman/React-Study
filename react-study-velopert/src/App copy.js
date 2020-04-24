import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';

import UserDispatch from './UserContext';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

window.produce = produce;

function countActiveUsers(users) {
  let count = users.filter((user) => user.active).length;
  console.log('활성화된 사용자 처리 : ' + count);
  return count;
}

const initalState = {
  users: [
    {
      id: 1,
      username: 'veroper',
      email: 'veroper@example.com',
    },
    {
      id: 2,
      username: 'veroper',
      email: 'veroper@example.com',
    },
    {
      id: 3,
      username: 'veroper',
      email: 'veroper@example.com',
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
        draft.input = initalState.inputs;
      });
    // return {
    //   inputs: initalState.inputs,
    //   users: state.users.concat(action.user)
    // }
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map(user =>
    //     user.id === action.id
    //     ? { ...user, active: !user.ative}
    //     :user)
    // }
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id !== action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter(user=> user.id !== action.id)
    // }
    default:
      throw new Error('Unhandled action');
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(state.users), [state.users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        <CreateUser />
        <UserList users={users} />
        <div>활성화된 사용자 수 : {count}</div>
      </div>
    </UserDispatch.Provider>
  );
};

export default App;
