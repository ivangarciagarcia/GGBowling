import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  UPDATE_USER_INFO,
} from './actions';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_RESPONSE:
      return {
        ...state,
        loading: false,
        userInfo: action.userInfo,
        error: action.error || null,
      };

    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_RESPONSE:
      return {
        ...state,
        loading: false,
        userInfo: null,
      };

    default:
      return state;
  }
};
export default login;
