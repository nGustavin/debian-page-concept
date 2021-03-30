import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme'
import GlobalStyle from './styles/globalstyle'
import Layout from './styles/layout';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
        <Header/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
