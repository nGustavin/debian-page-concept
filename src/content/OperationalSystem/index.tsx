import { ReactNode } from 'react';
import Title from '../../components/SectionTitle';

import { Container } from './styles';

interface OperationalSystemProps {
  children?: ReactNode;
}

function OperationalSystem({ children }: OperationalSystemProps) {
  return (
    <Container>
      <Title title="The Operational System" description="Debian is free and complete!" />
      {children}
    </Container>
  );
};

export default OperationalSystem;
