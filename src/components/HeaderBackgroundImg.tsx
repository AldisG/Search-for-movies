import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  image: string
}

const HeaderBackgroundImgStyled = styled.div`
  width: 100%;
  overflow: hidden;
  .header-background-image{
    filter: blur(5px);
    min-height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0, center;
    width: 110%;
    transform: translate(-5%, -5%);

  -webkit-mask-image: 
    linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)),
    linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  -webkit-mask-size: 100% 50%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: top, bottom;
  }
`

const HeaderBackgroundImg: FC<Props> = ({ image }) => {
  return (
    <HeaderBackgroundImgStyled>
      <div
        className="header-background-image"
        style={{ backgroundImage: `url(${image})` }}>
      </div>
    </HeaderBackgroundImgStyled>
  )
}

export default HeaderBackgroundImg
