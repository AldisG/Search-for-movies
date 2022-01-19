import { FC } from 'react'
import { animated, useSpring } from 'react-spring'
import ShowGenre from '../../components/tools/ShowGenre'
import { useAppSelector } from '../../store/redux/hooks'
import { determineImageSize, shortenSummaryParagraph } from '../../functions/functions'
import NoPhotoFound from '../../components/errors/NoPhotoFound'
import ShowPosterImage from '../../components/ShowPosterImage'
import LinkToShow from './LinkToShow'
import { ShowProps } from '../../store/types/showApiTypes'
import './show.scss'

const Show: FC<ShowProps> = ({
  id, title, imgLink, genres, summary
}) => {
  const showGrid = useAppSelector(({ searchedShow }) => searchedShow.showGrid)

  const animatedShow = useSpring({
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
    <animated.div className="wrapper" style={animatedShow}>
      <div className={`show-item ${!showGrid && 'list'}`}>

        {imgLink && (
          <LinkToShow
            linkId={id}
            classNameProp="navigation-link"
            text=""
          >
            <ShowPosterImage
              showList={!showGrid}
              imageSize={handleDetermineImageSize(!showGrid)}
            />
          </LinkToShow>
        )}

        {!imgLink && (
          <LinkToShow
            linkId={id}
            classNameProp="show-item-link-image"
            text=""
          >
            <NoPhotoFound />
          </LinkToShow>
        )}

        <div className="information-container">
          <h5 className="show-title">{title}</h5>
          <span className="show-summary">
            {shortenSummaryParagraph(summary, showGrid)}
          </span>

          <LinkToShow classNameProp="navigation-link" text="See more" linkId={id}>{''}</LinkToShow>

          <div className="show-genres">
            {genres.map((genre) => (
              <ShowGenre key={genre} genre={genre} />
            ))}
          </div>

        </div>
      </div>
    </animated.div>
  )
}

export default Show
