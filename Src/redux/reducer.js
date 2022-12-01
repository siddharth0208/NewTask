export default function counterReducer(state = {value: 0, value2: 0}, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {...state, value: state.value + 1};
    case 'counter/decremented':
      if (state.value !== 0) {
        return {...state, value: state.value - 1};
      } else {
        return {...state};
      }

    default:
      return state;
  }
}
