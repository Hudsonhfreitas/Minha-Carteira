import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, MenuItemButton } from './styles';
import logoImg from '../../assets/logo.svg';
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {

  const {signOut} = useAuth()
  
  return (
    <Container>
        <Header>
          <LogoImg src={logoImg} alt="Logo minha carteira" />
          <Title>Minha Carteira</Title>
        </Header>

        <MenuContainer>
          <MenuItemLink to="/"><MdDashboard/>Dashboard</MenuItemLink>
          <MenuItemLink to="/list/entry-balance"><MdArrowDownward />Entradas</MenuItemLink>
          <MenuItemLink to="/list/exit-balance"><MdArrowUpward />Saídas</MenuItemLink>
          <MenuItemButton as="a" onClick={signOut}><MdExitToApp />Sair</MenuItemButton>
        </MenuContainer>
    </Container>
  );
}

export default Aside;