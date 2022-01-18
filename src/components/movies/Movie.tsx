import { FC } from 'react'
import MovieGenre from '../tools/MovieGenre'
import { Link } from 'react-router-dom'
import './movie.scss'
import { useAppSelector } from '../../redux/hooks'
import { removeTags } from '../../functions/functions'
import NoPhotoFound from '../errors/NoPhotoFound'

type Props = {
  id: number,
  title: string,
  imgLink: {
    medium: string,
    original: string,
  },
  genres: string[],
  summary: string
}
const Movie: FC<Props> = ({
  id, title, imgLink, genres, summary
}) => {
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)

  const shortenSummaryParagraph = (text: string) => {
    const cleanText = removeTags(text)
    const maxNum: number = showGrid ? 44 : 200
    return String(cleanText).substring(0, maxNum) + "..."
  }

  return (
    <div className="wrapper">
      <div className={`movie-item ${!showGrid && 'list'}`}>
        {imgLink && (
          <Link className="movie-item-link-image" to={`/movie/${id}`}>
            <img className={`movie-image ${!showGrid && 'list'}`} src={imgLink?.medium} alt={imgLink?.medium} />
          </Link>
        )}
        {!imgLink && <NoPhotoFound />}
        <div className="information-container">
          <h5 className="movie-title">{title}</h5>
          <span className="movie-summary">
            {shortenSummaryParagraph(summary)}
          </span>
          <Link className="navigation-link" to={`/movie/${id}`}>
            See more
          </Link>

          <div className="movie-genres">
            {genres.length > 0 && genres.map((genre) => (
              <MovieGenre key={genre} genre={genre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
