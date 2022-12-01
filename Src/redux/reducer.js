import {
  GET_USER_LIST,
  GET_USER_DETAILS,
  USER_DETAILS_ERROR,
  USER_LIST_ERROR,
} from './types';

const initialState = {
  userList: [],
  userDetails: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        userList: action.data,
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.data,
      };
    case USER_LIST_ERROR:
      return {
        ...state,
        userList: [],
      };
    case USER_DETAILS_ERROR:
      return {
        ...state,
        userDetails: [],
      };
    default:
      return state;
  }
};

export default userReducer;
