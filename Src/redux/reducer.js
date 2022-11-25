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
    case 'counter2/incremented':
      return {...state, value2: state.value2 + 1};
    case 'counter2/decremented':
      if (state.value2 !== 0) {
        return {...state, value2: state.value2 - 1};
      } else {
        return {
          ...state,
        };
      }
    case 'getUserList':
      return {...state, userList: state.value + 1};
    default:
      return state;
  }
}
