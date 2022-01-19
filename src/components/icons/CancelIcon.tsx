import styled from "styled-components"

const ImgStyled = styled.img`
  height: 15px;
  width: 15px;
`

const CancelIcon = () => {
  return (
    <ImgStyled
      className="search-icon"
      src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
      alt="Grid"
    />
  )
}

export default CancelIcon