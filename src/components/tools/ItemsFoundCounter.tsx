import { useAppSelector } from "../../store/redux/hooks";

const ItemsFoundCounter = () => {

  const amountOfMoviesFound = useAppSelector(({ searchedMovies }) => searchedMovies.movieList.length)

  return (
    <div>
      {amountOfMoviesFound ? amountOfMoviesFound : ''}
    </div>
  )
}
export default ItemsFoundCounter