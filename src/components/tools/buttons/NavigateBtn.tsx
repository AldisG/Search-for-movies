import { FC } from 'react'

const NavigateBtn: FC = ({ children }) => {
  return (
    <button className="search-button">
      {children}
    </button>
  )
}

export default NavigateBtn
