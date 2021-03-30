import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme'
import GlobalStyle from './styles/globalstyle'
import Layout from './styles/layout';
import Header from './components/Header';
import OperationalSystem from './content/OperationalSystem';
import Title from './content/Title';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
        <Header/>
        <Title/>
        <OperationalSystem/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
