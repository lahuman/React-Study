import React from "react";
import Counter from "../componets/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

export default () => {
  // case 1 : 최적화 안됨 매번 값이 바뀌어 다시 랜더링됨
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // case 2 : 나눠서 최적화시 값의 변화를 자체적으로 확인
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  // case 3 : 한번에 최적화
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    // 직접 비교 처리
    // (left, right) => {
    //   return left.diff === right.diff && left.number === right.number;
    // }
    // 비교 함수 사용 얕은 비교임으로, 사용시 주의 해야함!
    shallowEqual
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
};
