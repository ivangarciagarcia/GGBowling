import axios from 'axios';

export interface LoginProps {
  email: string;
  password: string;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';

export const login = (credentials: LoginProps): any => {
  return (
    dispatch: (arg0: { type: string; userInfo?: any; error?: string }) => void
  ) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    return new Promise((resolve, reject) => {
      // Realiza la lógica de inicio de sesión aquí, por ejemplo, una llamada a la API
      axios
        .post('/usuario/login', credentials)
        .then((response) => {
          const userInfo = response.data;
          dispatch({
            type: LOGIN_RESPONSE,
            userInfo,
          });
          resolve(userInfo);
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_ERROR,
            error: error.code,
          });
          reject(error);
        });
    });
  };
};
