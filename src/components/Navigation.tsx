import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyled = styled.div`
  display: flex;
  gap: 20px;
`

const Navigation: FC = () => {
  return (
    <NavigationStyled className="navigation">
      <Link className='navigation-link' to='/'>Home</Link>
    </NavigationStyled>
  );
};

export default Navigation;
