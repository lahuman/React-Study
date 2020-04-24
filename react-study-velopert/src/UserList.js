import React, { useContext } from 'react';

import UserDispatch from './UserContext';

const User = React.memo(({ user }) => {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   //clearner 함수
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐')
  //   }
  // }, []);
  // useEffect(() => {
  //   console.log(user);

  //   //clearner 함수
  //   return () => {

  //   }
  // }, [user]);
  return (
    <div>
      <b
        onClick={() => dispatch({ type: 'TOGGLE_USER', id })}
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
      >
        {user.username}
      </b>{' '}
      <span>{user.email}</span>
      <button onClick={() => dispatch({ type: 'REMOVE_USER', id })}>
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return <div>{users && users.map((u) => <User user={u} key={u.id} />)}</div>;
}

export default React.memo(
  UserList,
  (preProps, nextProps) => nextProps === preProps.users
);
