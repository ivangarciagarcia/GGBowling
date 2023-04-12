import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureAppStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const store = configureAppStore({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
