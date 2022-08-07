import React, { useEffect } from 'react';

import api from '@services/api';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then((response) => console.log(response.data));
  });

  return (
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
};

export default TransactionsTable;
