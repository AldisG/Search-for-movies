import styled from "styled-components"

const ImgStyled = styled.img`
  height: 20px;
  width: 20px;
`

const SearchIcon = () => {
  return (
    <ImgStyled
      className="search-icon"
      src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
      alt="Search"
    />
  )
}

export default SearchIcon
