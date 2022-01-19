import { createSlice } from '@reduxjs/toolkit';
import { SearchMovieList } from '../types/movieApiTypes'

const initialState = {
  movieList: [] as SearchMovieList[],
  searchInput: '',
  showGrid: true,
  clickedSearchShow: {} as SearchMovieList
};

const moviesSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    searchResults: (state, { payload }) => {
      state.movieList = payload
    },
    searchInput: (state, { payload }) => {
      state.searchInput = payload
    },
    chooseGridOrListOfSearches: (state) => {
      state.showGrid = !state.showGrid
    },
  },
});

export const {
  searchResults,
  searchInput,
  chooseGridOrListOfSearches,
} = moviesSlice.actions
export default moviesSlice.reducer;
