import React, { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import theme from '@utils/theme';

import { Header, Dashboard } from '@components/index';

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
