import { FC } from 'react'
import MovieGenre from '../tools/MovieGenre'
import { useAppSelector } from '../../store/redux/hooks'
import { determineImageSize, shortenSummaryParagraph } from '../../functions/functions'
import NoPhotoFound from '../errors/NoPhotoFound'
import MoviePosterImage from '../MoviePosterImage'
import LinkToMovie from './LinkToMovie'
import './movie.scss'
import { Link } from 'react-router-dom'

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

  const handleDetermineImageSize = (showMediumImg: boolean) => {
    return determineImageSize(showMediumImg, imgLink?.medium, imgLink?.original)
  }

  return (
    <div className="wrapper">
      <div className={`movie-item ${!showGrid && 'list'}`}>

        {imgLink && (
          <LinkToMovie
            linkId={id}
            classNameProp="navigation-link"
            text=""
          >
            <MoviePosterImage
              showList={!showGrid}
              imageSize={handleDetermineImageSize(!showGrid)}
            />
          </LinkToMovie>
        )}

        {!imgLink && (
          <LinkToMovie
            linkId={id}
            classNameProp="movie-item-link-image"
            text=""
          >
            <NoPhotoFound />
          </LinkToMovie>
        )}

        <div className="information-container">
          <h5 className="movie-title">{title}</h5>
          <span className="movie-summary">
            {shortenSummaryParagraph(summary, showGrid)}
          </span>

          <LinkToMovie classNameProp="navigation-link" text="See more" linkId={id}>{''}</LinkToMovie>

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
