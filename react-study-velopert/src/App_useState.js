import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";

function countActiveUsers(users) {
  let count = users.filter(user => user.active).length;
  console.log("활성화된 사용자 처리 : " + count);
  return count;
}


const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;
  const onChagnge = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "veroper",
      email: "veroper@example.com"
    },
    {
      id: 2,
      username: "veroper",
      email: "veroper@example.com"
    },
    {
      id: 3,
      username: "veroper",
      email: "veroper@example.com"
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    setInputs({
      username: "",
      email: ""
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email, ]);
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(u => (u.id === id ? { ...u, active: !u.active } : u)));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CreateUser
        username={username}
        email={email}
        onChange={onChagnge}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성화된 사용자 수 : {count}</div>
    </div>
  );
}

export default App;


