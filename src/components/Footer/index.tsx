import { ReactNode } from 'react';

import { Container } from './styles';

interface FooterProps {
  children?: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <Container>
      <h1>Footer</h1>
      {children}
    </Container>
  );
};

export default Footer;
