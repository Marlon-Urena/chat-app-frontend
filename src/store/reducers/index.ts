import { combineReducers } from '@reduxjs/toolkit';
import chatSlice from '../chat/reducer';

export const rootReducer = combineReducers({
  chat: chatSlice.reducer
});
