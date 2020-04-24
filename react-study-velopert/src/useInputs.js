import { useReducer, useCallback} from 'react';

const reducer = (state, action) => {

  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      };
    case 'RESET':
      return {
       ...action.initalForm
      }
    default: 
      throw new Error('Unhandled action');
  }
}
function useInputs(initalForm) {
  const [state, dispatch] = useReducer(reducer, initalForm);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({type: 'CHANGE', 
    name, value});
  }, []);
  const reset = useCallback(() => dispatch({
    type: 'RESET',
    initalForm: {...initalForm }
  }));

  return [state, onChange, reset];
}

export default useInputs;