import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  text: string
}

const GoBackBtn: FC<Props> = ({ text }) => {
  const navigate = useNavigate()

  return (
    <button
      className='toggle-search-result-style go-back-button'
      onClick={() => navigate("/")}
    >
      {text}
    </button>
  )
}

export default GoBackBtn
