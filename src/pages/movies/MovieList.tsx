import { useEffect, useState } from "react";
import '../movies/moviesList.scss'
import Movie from "./Movie";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import moviesAPI, { useGetAnyMoviesListQuery } from '../../services/movies';
import { searchList } from '../../slices/searchMovieSlice';

const Home = () => {
  const movieListAvailable = useAppSelector(({ searchedMovies }) => searchedMovies.movieList)
  console.log(movieListAvailable)
  const dispatch = useAppDispatch()
  const {
    data, error, isLoading, isError,
  } = useGetAnyMoviesListQuery(String(0));

  useEffect(() => {
    dispatch(searchList(data))
    // const apiCall = dispatch(moviesAPI.endpoints.getAnyMoviesList.initiate('0'))
    return () => {
      // apiCall.unsubscribe
    }
  }, [data, dispatch])
  if (error || isError) {
    return (
      <div className="error">
        <h1>ERROR while fetching movies database</h1>
        <p>Make sure your internet connection is active and try refreshing page!</p>
      </div>
    );
  }
  if (isLoading || !data) {
    return (
      <div className="error">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="movie-section">
      <div className="movies-container">
        {movieListAvailable?.map(({
          id, name, image, genres
        }) => (
          <Movie key={id}
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
