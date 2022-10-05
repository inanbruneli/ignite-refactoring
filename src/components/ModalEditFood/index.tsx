import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import React from 'react';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: boolean;
  handleUpdateFood: (food) => void;
}

export default function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input icon={null} name="image" placeholder="Cole o link aqui" />

        <Input icon={null} name="name" placeholder="Ex: Moda Italiana" />
        <Input icon={null} name="price" placeholder="Ex: 19.90" />

        <Input icon={null} name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}