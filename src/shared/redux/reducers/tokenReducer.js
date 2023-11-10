import {LOGIN, LOGOUT} from '../actions/authActions';

const initialState = {
  accessToken: '',
};

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: action.token.accessToken,
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

export default tokenReducer;
