import { createSlice } from '@reduxjs/toolkit';
import { SearchMovieList } from '../types/movieApiTypes'

const initialState = {
  movieList: [] as SearchMovieList[],
  searchInput: ''
};

const moviesSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    searchResults: (state, action) => {
      state.movieList = action.payload
    },
    searchInput: (state, action) => {
      state.searchInput = action.payload
    }
  },
});

export const { searchResults, searchInput } = moviesSlice.actions
export default moviesSlice.reducer;
