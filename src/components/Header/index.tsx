import { ReactNode } from 'react';

import { Container, Buttons, Search} from './styles';
import Logo from '../../assets/logo.svg'

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Buttons>
        <img src={Logo} alt="debian-logo"/>
        <a href="/">Blog</a>
        <a href="/">Micronews</a>
        <a href="/">Planet</a>
      </Buttons>
      <Search>
        <input type="text" name="" id=""/>
        <button>Search</button>
      </Search>
    </Container>
  );
};

export default Header;
