import { createSlice } from '@reduxjs/toolkit';
import { SearchMovieList } from '../types/movieApiTypes'

const initialState = {
  movieList: [] as SearchMovieList[],
  searchInput: '',
  showGrid: true
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
    },
    chooseGridOrListOfSearches: (state) => {
      state.showGrid = !state.showGrid
    }
  },
});

export const { searchResults, searchInput, chooseGridOrListOfSearches } = moviesSlice.actions
export default moviesSlice.reducer;
