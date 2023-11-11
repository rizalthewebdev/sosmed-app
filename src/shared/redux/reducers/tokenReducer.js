import {LOGIN, LOGOUT} from '../actions/authActions';

const initialState = {
  accessToken: '',
};

function TokenReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: action.token,
      };

    case LOGOUT:
      return {
        ...state,
        accessToken: '',
      };

    default:
      return state;
  }
}

export default TokenReducer;
