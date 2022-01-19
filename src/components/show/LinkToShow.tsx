import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  text: string,
  linkId: number,
  classNameProp: string,
  children: React.ReactNode
}

const LinkToShow: FC<Props> = ({ text, linkId, classNameProp, children }) => {
  return (
    <Link className={classNameProp} to={`/show/${linkId}`}>
      {children}
      {text}
    </Link>
  )
}

export default LinkToShow
