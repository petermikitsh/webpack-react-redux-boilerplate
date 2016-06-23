export function increment() {
  return dispatch => {
    dispatch({
      type: 'INCREMENT',
      value: 1
    });
  };
}
