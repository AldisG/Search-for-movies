import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesAPI } from '../services/movies';
import searchMovieSlice from '../slices/searchMovieSlice';

const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    searchedMovies: searchMovieSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesAPI.middleware)
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
