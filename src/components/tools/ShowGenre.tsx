import { FC } from 'react'

type Props = {
  genre: string
}

const ShowGenre: FC<Props> = ({ genre }) => {
  return <span className="show-genre">{genre}</span>
}

export default ShowGenre