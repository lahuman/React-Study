import React from "react";
import Counter from "../componets/Counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// 기본 사용법
// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// bindActionCreators 활용
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch
//   );

// 객체로 사용
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // )(({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
)(
  ({
    number,
    diff,
    increase: onIncrease,
    decrease: onDecrease,
    setDiff: onSetDiff,
  }) => {
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
  }
);
