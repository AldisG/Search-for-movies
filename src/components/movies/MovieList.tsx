import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";
import { useGetMovieListQuery } from '../../store/services/movies';
import { searchResults } from '../../store/slices/searchMovieSlice';
import ErrorWhileLoading from "../errors/ErrorWhileLoading";
import ContentIsLoading from "../loading/ContentIsLoading";
import DisplayInformation from "../tools/DisplayInformation";
import Header from "../header/Header";
import Movie from "./Movie";
import './moviesList.scss'

const Home = () => {
  const movieListAvailable = useAppSelector(({ searchedMovies }) => searchedMovies.movieList)
  const searchInput = useAppSelector(({ searchedMovies }) => searchedMovies.searchInput)
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)
  const dispatch = useAppDispatch()

  const {
    data, error, isLoading, isError,
  } = useGetMovieListQuery(searchInput);

  useEffect(() => {
    dispatch(searchResults(data))
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
      <Header />

      {movieListAvailable.length > 0 && <DisplayInformation />}
      <div className={`movies-container ${!showGrid && 'list-show'}`}>
        {movieListAvailable.map(({ show: {
          id, name, image, genres, summary
        } }) => {
          return (
            <Movie
              key={id}
              id={id}
              title={name}
              imgLink={image}
              genres={genres}
              summary={summary}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
