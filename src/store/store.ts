import { Action, AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './reducers';
import chatMiddleware from './middlewares/chatMiddleware';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger, chatMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
