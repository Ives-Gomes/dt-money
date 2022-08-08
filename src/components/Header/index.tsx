import React from 'react';

import logoImg from '@assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => (
  <Container>
    <Content>
      <img src={logoImg} alt="dt money" />

      <button
        type="button"
        onClick={onOpenNewTransactionModal}
      >
        Nova transação
      </button>
    </Content>
  </Container>
);

export default Header;
