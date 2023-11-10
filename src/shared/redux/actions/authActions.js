export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_INFO = 'SET_INFO';

export const login = data => dispatch => {
  dispatch({
    type: LOGIN,
    user: data.user,
    token: data.token,
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

export const setInfo = data => dispatch => {
  dispatch({
    type: SET_INFO,
    user: data,
  });
};
