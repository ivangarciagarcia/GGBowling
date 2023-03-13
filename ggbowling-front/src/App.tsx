import React from 'react';
import './app.scss';
import { LoginForm } from './modules/login/Login';

function App() {
  return <LoginForm onSubmit={function (email: string, password: string): void {
    throw new Error('Function not implemented.');
  } } />;
}

export default App;
