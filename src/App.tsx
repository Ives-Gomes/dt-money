import React, { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import theme from '@utils/theme';

import { Header, Dashboard, NewTransactionModal } from '@components/index';

Modal.setAppElement('#root');

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
