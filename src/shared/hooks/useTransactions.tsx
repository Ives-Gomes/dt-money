/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';

import { Transaction } from '@interfaces/transaction/transactionsInterfaces';

import api from '@services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
