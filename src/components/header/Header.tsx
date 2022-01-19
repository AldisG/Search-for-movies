import { useState, useEffect } from 'react'
import HeaderBackgroundImg from './HeaderBackgroundImg'
import SearchShow from '../search/SearchShow'
import { useFillerImageQuery } from '../../store/services/show'
import { FillerImage } from '../../store/types/showApiTypes'
import './header.scss'

const Header = () => {
  const [fillerImages, setFillerImages] = useState<FillerImage[]>()
  const { data } = useFillerImageQuery('')

  useEffect(() => {
    if (data) {
      setFillerImages(data)
    }
  }, [data])

  return (
    <div className='header-container'>
      <div className="header-texts">
        <h1 className="welcome-title">Welcome!</h1>
        <span className="welcome-message">Search for cool shows!</span>
        {fillerImages && <HeaderBackgroundImg image={fillerImages[1].resolutions.original.url} />}
      </div>
      <SearchShow />
    </div>
  )
}

export default Header
