import { createSlice } from '@reduxjs/toolkit';
import { SearchShowList } from '../types/showApiTypes'

const initialState = {
  showList: [] as SearchShowList[],
  searchInput: '',
  showGrid: true,
  clickedSearchShow: {} as SearchShowList
};

const showSlice = createSlice({
  name: 'showList',
  initialState,
  reducers: {
    searchResults: (state, { payload }) => {
      state.showList = payload
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
} = showSlice.actions
export default showSlice.reducer;
