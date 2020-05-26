import React from "react";
import Greetins from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  return <Greetins name="리액트" onClick={onClick} />;
}

export default App;
