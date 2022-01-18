import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { chooseGridOrListOfSearches } from '../../slices/searchMovieSlice';

const ItemsFoundCounter = () => {

  const dispatch = useAppDispatch()
  const amountOfMoviesFound = useAppSelector(({ searchedMovies }) => searchedMovies.movieList.length)

  return (
    <div>
      {amountOfMoviesFound ? amountOfMoviesFound : ''}
    </div>
  )
}
export default ItemsFoundCounter