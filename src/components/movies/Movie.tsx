import { FC } from 'react'
import MovieGenre from '../MovieGenre'
import { Link } from 'react-router-dom'
import './movie.scss'

type Props = {
  id: number,
  title: string,
  imgLink: {
    medium: string,
    original: string,
  },
  genres: string[]
}
const Movie: FC<Props> = ({
  id, title, imgLink, genres
}) => {
  return (
    <div className="wrapper">
      <div className="movie-item">
        {imgLink && (
          <Link className="movie-item-link-image" to={`/movie/${id}`}>
            <img className="movie-image" src={imgLink?.medium} alt={imgLink?.medium} />
          </Link>
        )}

        <h5 className="movie-title">{title}</h5>

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
  )
}

export default Movie