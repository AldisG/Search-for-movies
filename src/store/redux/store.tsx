import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { showAPI } from '../services/show';
import searchShowlice from '../slices/searchShowSlice';

const store = configureStore({
  reducer: {
    [showAPI.reducerPath]: showAPI.reducer,
    searchedShow: searchShowlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(showAPI.middleware)
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
