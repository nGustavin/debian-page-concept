import { ReactNode } from 'react';
import Title from '../../components/SectionTitle';

import { Container, Section, Content, Download } from './styles';
import Logo from '../../assets/logo.svg'
interface OperationalSystemProps {
  children?: ReactNode;
}

function OperationalSystem({ children }: OperationalSystemProps) {
  return (
    <Container>
      <Title title="The Operational System" description="Debian is free and complete!" />

      <Section>
        <Content>
          <div>
            <h1>Why Debian</h1>
            <h2>What makes Debian special</h2>
          </div>
          <div>
            <h1>Support to the users</h1>
            <h2>Documentation and get help</h2>
          </div>
          <div>
            <h1>Security Updates</h1>
            <h2>Debian Security Advices (DSA)</h2>
          </div>
          <div>
            <h1>More..</h1>
            <h2>More links to downloads and softwares</h2>
          </div>
        </Content>
        <Download>
          <img src={Logo} alt="Debian Logo"/>
          <button>Download</button>
        </Download>
      </Section>
    </Container>
  );
};

export default OperationalSystem;
