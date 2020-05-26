import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string;
  onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark = "!", onClick }) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      HELLO, {name} {mark}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

// 이렇게 쓰면 undefinde 가 표출될수 있음
// Greetings.defaultProps = {
//   mark: "!",
// };

export default Greetings;
