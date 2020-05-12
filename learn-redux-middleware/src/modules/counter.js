const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initalState = 0;

export const increaseAsync = () => (dispatch, state) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch, state) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
export default (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
