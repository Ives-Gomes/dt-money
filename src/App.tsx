import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import theme from '@utils/theme';

import Header from '@components/Header';
import Dashboard from '@components/Dashboard';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />

    <Dashboard />

    <GlobalStyle />
  </ThemeProvider>
);

export default App;
