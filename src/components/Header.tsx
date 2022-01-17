import HeaderBackgroundImg from './HeaderBackgroundImg'
import SearchMovies from './SearchMovies'
import { useGetAnyMoviesListQuery } from '../services/movies'
import './header.scss'

const Header = () => {
  const { data } = useGetAnyMoviesListQuery(String(0));

  return (
    <div className='header-container'>
      <div className="header-texts">
        <h1 className="welcome-title">Welcome!</h1>
        <span className="welcome-message">Search for cool movies!</span>
      </div>
      <SearchMovies />
      {data && <HeaderBackgroundImg image={data[0].image.original} />}
    </div>
  )
}

export default Header
