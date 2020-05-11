import React, { useEffect } from "react";
import useReactRouter from "use-react-router";

export default () => {
  const { history, location, match } = useReactRouter();
  useEffect(() => {
    console.log(history, location, match);
  }, [history, location, match]);
  return <div>HI</div>;
};
