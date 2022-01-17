import { FormEvent, useState } from "react"
import SearchIcon from "./SearchIcon"
import './searchMovies.scss'

const SearchMovies = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Attempt to search for a movie', searchInput.trim())
  }
  return (
    <form
      className="search-movies-container"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Search for a movie" />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchMovies
