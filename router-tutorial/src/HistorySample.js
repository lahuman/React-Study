import React, { useEffect } from "react";

export default ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };
  const replaceToHome = () => {
    history.replace("/");
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실껀가요?");
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 Replace</button>
    </div>
  );
};
