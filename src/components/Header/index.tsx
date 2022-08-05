import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button type='button'>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header;