import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { chooseGridOrListOfSearches } from '../../../slices/searchMovieSlice';

const ToggleDisplayView = () => {
  const dispatch = useAppDispatch()
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)

  const handleToggle = () => {
    dispatch(chooseGridOrListOfSearches())
  }
  return (
    <button
      onClick={() => handleToggle()}
      className='search-button toggle-search-result-style'>
      {showGrid ? 'Grid' : 'List'}
    </button>
  )
}

export default ToggleDisplayView
