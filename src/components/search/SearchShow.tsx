import { FormEvent, useState, useEffect, useRef } from "react"
import { useAppDispatch } from "../../store/redux/hooks"
import { searchInput } from "../../store/slices/searchShowSlice"
import SearchIcon from "../icons/SearchIcon"
import NavigateBtn from "../tools/buttons/NavigateBtn"
import './searchShow.scss'

const SearchShow = () => {
  const dispatch = useAppDispatch()
  const [userInput, setUserInput] = useState('')

  const focusOnInput = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchInput(userInput.trim()))
  }
  useEffect(() => {
    focusOnInput.current?.focus()
  }, [])

  return (
    <form
      className="search-show-container"
      onSubmit={(e) => handleSubmit(e)}
    >

      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        ref={focusOnInput}
        className="search-input"
        type="text"
        placeholder="Search for a show"
      />

      <NavigateBtn>
        <SearchIcon />
      </NavigateBtn>
    </form>
  )
}

export default SearchShow
