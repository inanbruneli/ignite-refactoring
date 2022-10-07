
import { FiPlusSquare } from 'react-icons/fi';
import React from 'react';
import { Container } from './styles';
//import Logo from '../../assets/logo.svg';

interface HeaderProps {
  openModal: () => void;
}

//const { openModal } = this.props;

export default function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <img src='logo.svg' alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
} 