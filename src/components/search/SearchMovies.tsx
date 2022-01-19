import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../store/redux/hooks"
import { searchInput } from "../../store/slices/searchMovieSlice"
import SearchIcon from "../icons/SearchIcon"
import NavigateBtn from "../tools/buttons/NavigateBtn"
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
      <NavigateBtn>
        <SearchIcon />
      </NavigateBtn>
    </form>
  )
}

export default SearchMovies
