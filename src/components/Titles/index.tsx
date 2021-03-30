import { ReactNode } from 'react';

import { Container } from './styles';

type TitleProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  isTransparent?: boolean;
}

function Title({ children, title, description, isTransparent }: TitleProps) {
  return (
    <Container isTransparent={isTransparent}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {children}
    </Container>
  );
};

export default Title;

