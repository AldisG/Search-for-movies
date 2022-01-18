import { useEffect } from "react";
import './moviesList.scss'
import Movie from "./Movie";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useGetMovieListQuery } from '../../services/movies';
import { searchResults } from '../../slices/searchMovieSlice';
import ErrorWhileLoading from "../errors/ErrorWhileLoading";
import ContentIsLoading from "../loading/ContentIsLoading";
import DisplayInformation from "../tools/DisplayInformation";

const Home = () => {
  const movieListAvailable = useAppSelector(({ searchedMovies }) => searchedMovies.movieList)
  const searchInput = useAppSelector(({ searchedMovies }) => searchedMovies.searchInput)
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)
  const dispatch = useAppDispatch() // search form
  const {
    data, error, isLoading, isError,
  } = useGetMovieListQuery(searchInput);

  useEffect(() => {
    dispatch(searchResults(data)) // search form
    // dispatch(moviesAPI.endpoints.getAnyMoviesList.initiate('1'))
    // return () => apiCall.unsubscribe
  }, [data, dispatch])

  if (error || isError) {
    return (
      <ErrorWhileLoading />
    );
  }

  if (isLoading || !movieListAvailable) {
    return (
      <ContentIsLoading />
    );
  }

  return (
    <div className="movie-section">
      <DisplayInformation />
      <div className={`movies-container ${!showGrid && 'list-show'}`}>
        {movieListAvailable.length > 0 && movieListAvailable.map(({ score, show: {
          id, name, image, genres, summary
        } }) => (
          <Movie
            key={id}
            id={id}
            title={name}
            imgLink={image}
            genres={genres}
            summary={summary}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
