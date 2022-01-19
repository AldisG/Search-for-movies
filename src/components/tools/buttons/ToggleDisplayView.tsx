import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { chooseGridOrListOfSearches } from '../../../store/slices/searchMovieSlice';

import GridIcon from "../../icons/GridIcon";
import ListIcon from "../../icons/ListIcon";

const ToggleDisplayView = () => {
  const dispatch = useAppDispatch()
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)

  const handleToggle = () => {
    dispatch(chooseGridOrListOfSearches())
  }
  return (
    <button
      onClick={() => handleToggle()}
      className='toggle-search-result-style'>
      {showGrid ? <GridIcon /> : <ListIcon />}
    </button>
  )
}

export default ToggleDisplayView
