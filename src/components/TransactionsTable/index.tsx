import React from 'react';

import { Container } from './styles';

const TransactionsTable: React.FC = () => (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desenvolvimento de Website</td>
          <td className="deposit">R$2.000,00</td>
          <td>Desenvolvimento</td>
          <td>05/08/2022</td>
        </tr>

        <tr>
          <td>Aluguel</td>
          <td className="withdraw">- R$1.000,00</td>
          <td>Casa</td>
          <td>15/07/2022</td>
        </tr>
      </tbody>
    </table>
  </Container>
);

export default TransactionsTable;
