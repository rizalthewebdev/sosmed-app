import {LOGIN, LOGOUT, SET_INFO} from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  user: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };

    case SET_INFO:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default authReducer;
