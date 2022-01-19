import { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/redux/hooks'
import '../tools/buttons/buttons.scss'
import { SearchShowList, ShowListType } from '../../store/types/showApiTypes'
import ErrorWhileLoading from '../errors/ErrorWhileLoading'
import ShowPosterImage from '../ShowPosterImage'
import './ShowDetails.scss'
import { removeTags } from '../../functions/functions'
import ContentIsLoading from '../loading/ContentIsLoading'
import StarIcon from '../icons/StarIcon'
import CancelIcon from '../icons/CancelIcon'
import ShowGenre from '../tools/ShowGenre'
import { animated, useSpring } from 'react-spring'

const ShowDetails: FC = () => {
  const navigate = useNavigate()
  const { ID } = useParams()

  const showList = useAppSelector(({ searchedShow }) => searchedShow.showList) as SearchShowList[]

  const [correctShow, setCorrectShow] = useState<ShowListType | undefined>(undefined)
  const [showStars, setShowStars] = useState<number | undefined>(0)

  const getcorrectShowToDisplay = (): SearchShowList | undefined => {
    const result = showList.find(({ show }) => String(show.id) === String(ID))
    if (result) {
      return result
    }
    return undefined
  }

  useEffect(() => {
    setCorrectShow(getcorrectShowToDisplay()?.show)
    setShowStars(getcorrectShowToDisplay()?.score)
  }, [getcorrectShowToDisplay])

  const animatedShow = useSpring({
    from: { opacity: 0 },
    enter: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500
    }
  })

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
      {(correctShow && showStars) ? (
        <animated.div
          style={animatedShow}
          className='show-details-container'>
          <div className="show-details-wrapper">

            <div className="show-poster-large">
              <ShowPosterImage
                showList={false}
                imageSize={
                  correctShow?.image.original
                    ? correctShow?.image.original
                    : ''
                }
              />
            </div>

            <div className="show-details">
              <button
                className='toggle-search-result-style go-back-button close-button'
                onClick={() => navigate("/")}
              >
                <CancelIcon />

              </button>

              <h1 className='show-header'>
                {correctShow.name}
              </h1>

              <span className="stars">
                <StarIcon /> {convertRating(showStars)}
              </span>

              <span className='light-grey-text show-status'>
                Status: <b>{correctShow.status}</b>
              </span>

              <span className='show-details'>
                {correctShow.summary && removeTags(correctShow.summary)}
              </span>

              <p className='light-grey-text show-premier'>
                Premiered: <b>{correctShow.premiered}</b>
              </p>

              {correctShow.language && (
                <span className='light-grey-text show-premier'>
                  Premiered: <b>{correctShow.language}</b>
                </span>
              )}

              <div className="show-genres">
                {correctShow.genres.length > 0 && correctShow.genres.map((genre) => (
                  <ShowGenre key={genre} genre={genre} />
                ))}
              </div>

              <button
                className='toggle-search-result-style go-back-button show-details-go-back-button'
                onClick={() => navigate("/")}
              >
                Back to search
              </button>
            </div>
          </div>
        </animated.div>
      )
        : (
          <ContentIsLoading />
        )}
    </>
  )
}

export default ShowDetails
