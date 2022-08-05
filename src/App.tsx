import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import theme from '@utils/theme';

import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>

    <Header />

    <GlobalStyle />
  </ThemeProvider>
);

export default App;
