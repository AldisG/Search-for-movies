import { FC } from 'react'

type Props = {
  showList: boolean,
  imageSize: string
}

const ShowPosterImage: FC<Props> = ({ showList, imageSize }) => {
  return (
    <img
      className={`show-image ${showList && 'list'}`}
      src={imageSize}
      alt={imageSize}
    />
  )
}

export default ShowPosterImage
