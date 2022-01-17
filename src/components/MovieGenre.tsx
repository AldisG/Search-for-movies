import { FC } from 'react'

type Props = {
  genre: string
}

const MovieGenre: FC<Props> = ({ genre }) => {
  return <span className="movie-genre">{genre}</span>
}

export default MovieGenre