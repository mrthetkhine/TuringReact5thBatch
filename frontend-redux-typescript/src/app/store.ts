import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import movieReducer from '../features/movies/movieSlice';
import reviewReducer from '../features/reviews/reviewSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    movie : movieReducer,
    review:reviewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
