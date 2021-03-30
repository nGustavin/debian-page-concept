import { ReactNode } from 'react';

import { Container } from './styles';

interface CommunityProps {
  children?: ReactNode;
}

function Community({ children }: CommunityProps) {
  return (
    <Container>
      <h1>Community</h1>
      {children}
    </Container>
  );
};

export default Community;
