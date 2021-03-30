import { ReactNode } from 'react';

import { Container } from './styles';
import LogoExtd from '../../assets/LogoExtended.svg'

interface TitleProps {
  children?: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <Container>
      <img src={LogoExtd} alt="Extended Logo"/>
    </Container>
  );
};

export default Title;
