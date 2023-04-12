import axios from 'axios';
import { SERVER_BASE_URL } from 'src/config/Config';

export interface LoginProps {
  email: string;
  password: string;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (credentials: LoginProps): any => {
  return (
    dispatch: (arg0: { type: string; userInfo?: any; error?: string }) => void
  ) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios
      .request({
        url: '/usuario/login',
        method: 'POST',
        //url: '/users',
        //method: 'GET',
        baseURL: SERVER_BASE_URL,
        data: credentials,
      })
      .then((response) => {
        const userInfo = response.data;

        dispatch({
          type: LOGIN_RESPONSE,
          userInfo,
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_ERROR,
          error: e.code,
        });
      });
  };
};
