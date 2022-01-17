import { useEffect } from "react";
import './moviesList.scss'
import Movie from "./Movie";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useGetMovieListQuery } from '../../services/movies';
import { searchResults } from '../../slices/searchMovieSlice';
import ErrorWhileLoading from "../ErrorWhileLoading";
import ContentIsLoading from "../ContentIsLoading";

const Home = () => {
  const movieListAvailable = useAppSelector(({ searchedMovies }) => searchedMovies.movieList)
  const dispatch = useAppDispatch() // search form
  const searchInput = useAppSelector(({ searchedMovies }) => searchedMovies.searchInput)
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
      <div className="movies-container">
        {movieListAvailable.length > 0 && movieListAvailable.map(({ score, show: {
          id, name, image, genres
        } }) => (
          <Movie
            key={id}
            id={id}
            title={name}
            imgLink={image}
            genres={genres}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
