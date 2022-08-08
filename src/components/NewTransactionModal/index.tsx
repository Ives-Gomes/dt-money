import React from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <Container>
      <h2>Cadastrar transação</h2>

      <input placeholder="Título" />
      <input type="number" placeholder="Valor" />
      <input placeholder="Caregoria" />

      <button type="submit">
        Cadastrar
      </button>
    </Container>
  </Modal>
);

export default NewTransactionModal;
