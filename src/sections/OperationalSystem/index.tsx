import { ReactNode } from 'react';

import { Container } from './styles';

interface OperationalSystemProps {
  children?: ReactNode;
}

function OperationalSystem({ children }: OperationalSystemProps) {
  return (
    <Container>
      <h1>OperationalSystem</h1>
      {children}
    </Container>
  );
};

export default OperationalSystem;
