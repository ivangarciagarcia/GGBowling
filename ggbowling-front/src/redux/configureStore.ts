import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducers } from './reducers';


export default function configureAppStore(preloadedState : any) {
  const store = configureStore({
    reducer: combineReducers(reducers),
    middleware: [...getDefaultMiddleware()],
    preloadedState
  });

  return store;
}
