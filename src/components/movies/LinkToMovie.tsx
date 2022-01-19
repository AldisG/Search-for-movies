import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  text: string,
  linkId: number,
  classNameProp: string,
  children: React.ReactNode
}

const LinkToMovie: FC<Props> = ({ text, linkId, classNameProp, children }) => {
  return (
    <Link className={classNameProp} to={`/movie/${linkId}`}>
      {children}
      {text}
    </Link>
  )
}

export default LinkToMovie
