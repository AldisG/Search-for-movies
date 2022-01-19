import styled from "styled-components"

const ImgStyled = styled.img`
  height: 20px;
  width: 20px;
`
const StarIcon = () => {
  return (
    <ImgStyled
      className="star-icon"
      src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-weather-kmg-design-flat-kmg-design.png"
      alt="Rating"
    />
  )
}

export default StarIcon
