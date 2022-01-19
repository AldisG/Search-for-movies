import styled from "styled-components"

const ImgStyled = styled.img`
  height: 20px;
  width: 20px;
`

const GridIcon = () => {
  return (
    <ImgStyled
      className="search-icon"
      src="https://img.icons8.com/ios/50/000000/grid.png"
      alt="Grid"
    />
  )
}

export default GridIcon