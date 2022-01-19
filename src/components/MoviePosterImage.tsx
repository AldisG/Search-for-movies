import { FC } from 'react'

type Props = {
  showList: boolean,
  imageSize: string
}

const MoviePosterImage: FC<Props> = ({ showList, imageSize }) => {
  return (
    <img
      className={`movie-image ${showList && 'list'}`}
      src={imageSize}
      alt={imageSize}
    />
  )
}

export default MoviePosterImage
