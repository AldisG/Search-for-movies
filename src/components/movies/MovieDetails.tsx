import { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/redux/hooks'
import '../tools/buttons/buttons.scss'
import { SearchMovieList, MovieListType } from '../../store/types/movieApiTypes'
import ErrorWhileLoading from '../errors/ErrorWhileLoading'
import MoviePosterImage from '../MoviePosterImage'
import './MovieDetails.scss'
import { removeTags } from '../../functions/functions'
import ContentIsLoading from '../loading/ContentIsLoading'
import StarIcon from '../icons/StarIcon'

const MovieDetails: FC = () => {
  const navigate = useNavigate()
  const { ID } = useParams()

  const movieList = useAppSelector(({ searchedMovies }) => searchedMovies.movieList) as SearchMovieList[]

  const [correctShow, setCorrectShow] = useState<MovieListType | undefined>(undefined)
  const [movieStars, setMovieStars] = useState<number | undefined>(0)

  const getcorrectShowToDisplay = (): SearchMovieList | undefined => {
    const result = movieList.find(({ show }) => String(show.id) === String(ID))
    if (result) {
      return result
    }
    return undefined
  }

  useEffect(() => {
    setCorrectShow(getcorrectShowToDisplay()?.show)
    setMovieStars(getcorrectShowToDisplay()?.score)
  }, [getcorrectShowToDisplay])


  if (!getcorrectShowToDisplay()) {
    return (
      <ErrorWhileLoading />
    )
  }

  const convertRating = (stars: number) => {
    return stars ? (stars * 10).toFixed(1) : ''
  }

  return (
    <>
      {(correctShow && movieStars) ? (
        <div className='movies-details-container'>
          <div className="movies-details-wrapper">

            <div className="movie-poster-large">
              <MoviePosterImage
                showList={false}
                imageSize={correctShow?.image.original || ''}
              />
            </div>

            <div className="movie-details">
              <button
                className='toggle-search-result-style go-back-button close-button'
                onClick={() => navigate("/")}
              >
                X
              </button>

              <h1 className='movie-header'>
                Movie Title
              </h1>
              <span className="stars">
                <StarIcon /> {convertRating(movieStars)}
              </span>
              <span className='light-grey-text movie-status'>
                Status: <b>{correctShow.status}</b>
              </span>

              <span className='movie-details'>{removeTags(correctShow.summary)}</span>
              <p className='light-grey-text movie-premier'>
                Premiered: <b>{correctShow.premiered}</b>
              </p>
              <button
                className='toggle-search-result-style go-back-button'
                onClick={() => navigate("/")}
              >
                Back to search
              </button>
            </div>
          </div>
        </div>
      )
        : (
          <ContentIsLoading />
        )}
    </>
  )
}

export default MovieDetails
