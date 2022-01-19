import styled from "styled-components"

const ImgStyled = styled.img`
  height: 20px;
  width: 20px;
`

const ListIcon = () => {
  return (
    <ImgStyled
      className="search-icon"
      src="https://img.icons8.com/ios/50/000000/list--v1.png"
      alt="List"
    />
  )
}

export default ListIcon
