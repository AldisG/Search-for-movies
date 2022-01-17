import { createSlice } from '@reduxjs/toolkit';
import { MovieListType } from '../types/movieApiTypes'

const initialState = {
  movieList: [] as MovieListType[],
};

const moviesSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    searchList: (state, action) => {
      state.movieList = action.payload
    }
  },
});

export const { searchList } = moviesSlice.actions
export default moviesSlice.reducer;
