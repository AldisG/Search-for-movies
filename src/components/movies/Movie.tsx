import { FC } from 'react'
import { animated, useSpring } from 'react-spring'
import MovieGenre from '../tools/MovieGenre'
import { useAppSelector } from '../../store/redux/hooks'
import { determineImageSize, shortenSummaryParagraph } from '../../functions/functions'
import NoPhotoFound from '../errors/NoPhotoFound'
import MoviePosterImage from '../MoviePosterImage'
import LinkToMovie from './LinkToMovie'
import { MovieProps } from '../../store/types/movieApiTypes'
import './movie.scss'

const Movie: FC<MovieProps> = ({
  id, title, imgLink, genres, summary
}) => {
  const showGrid = useAppSelector(({ searchedMovies }) => searchedMovies.showGrid)

  const animatedMovie = useSpring({
    from: { opacity: 0 },
    enter: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000
    }
  })

  const handleDetermineImageSize = (showMediumImg: boolean) => {
    return determineImageSize(showMediumImg, imgLink?.medium, imgLink?.original)
  }

  return (
    <animated.div className="wrapper" style={animatedMovie}>
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
            {genres.map((genre) => (
              <MovieGenre key={genre} genre={genre} />
            ))}
          </div>

        </div>
      </div>
    </animated.div>
  )
}

export default Movie
