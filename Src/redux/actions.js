import axios from 'axios';
import {
  GET_USER_LIST,
  GET_USER_DETAILS,
  USER_LIST_ERROR,
  USER_DETAILS_ERROR,
} from './types';
export const getUserList = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        // console.log('calledddd.........', res);
        dispatch({
          type: GET_USER_LIST,
          data: res.data,
        });
      })
      .catch(e => {
        dispatch({type: USER_LIST_ERROR});
      });
  };
};
export const getUserDetails = id => {
  return dispatch => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios
      .get(url)
      .then(res => {
        console.log('UserDetails response............', res.data);
        dispatch({
          type: GET_USER_DETAILS,
          data: res,
        });
      })
      .catch(e => {
        console.log('error........', e, url);
        dispatch({type: USER_DETAILS_ERROR});
      });
  };
};
