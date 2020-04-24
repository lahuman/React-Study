import React from 'react';

function User({user}) {
  // if(!user) return null;
  return (
    <div>
      <div>id: {user.id}</div>
      <div>username: {user.username}</div>
    </div>
  );
}

export default User;