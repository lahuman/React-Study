import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

export default () => {
  const number = useSelector((state) => state.counter);
  const disapach = useDispatch();

  const onIncrease = () => {
    disapach(increaseAsync());
  };
  const onDecrease = () => {
    disapach(decreaseAsync());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
