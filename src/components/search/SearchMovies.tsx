import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { searchInput } from "../../slices/searchMovieSlice"
import SearchIcon from "./SearchIcon"
import './searchMovies.scss'

const SearchMovies = () => {
  const dispatch = useAppDispatch()
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchInput(userInput.trim()))
  }
  return (
    <form
      className="search-movies-container"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Search for a movie"
      />

      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchMovies
