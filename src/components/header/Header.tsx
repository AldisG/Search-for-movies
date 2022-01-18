import { useState, useEffect } from 'react'
import HeaderBackgroundImg from './HeaderBackgroundImg'
import SearchMovies from '../search/SearchMovies'
import { useFillerImageQuery } from '../../services/movies'
import { FillerImage } from '../../types/movieApiTypes'
import '../../components/header/header.scss'

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
      <SearchMovies />
    </div>
  )
}

export default Header
