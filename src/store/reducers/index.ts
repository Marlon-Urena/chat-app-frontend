import { combineReducers } from '@reduxjs/toolkit';
import chatSlice from '../chat/reducer';
import authenticationSlice from '../authentication/reducer';

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
  authentication: authenticationSlice.reducer
});
