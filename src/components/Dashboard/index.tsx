import React from 'react';

import { Summary, TransactionsTable } from '@components/index';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Summary />

    <TransactionsTable />
  </Container>
);

export default Dashboard;
