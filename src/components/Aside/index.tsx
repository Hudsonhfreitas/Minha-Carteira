import React, { useState } from 'react';

import { 
  Container, 
  Header, 
  LogoImg, 
  MenuContainer,
  MenuItemLink, 
  Title, 
  MenuItemButton,
  ToogleMenu, 
  ThemeToggleFooter 
} from './styles';

import logoImg from '../../assets/logo.svg';

import {
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp, 
  MdClose, 
  MdMenu
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import Toggle from '../Toggle';

const Aside: React.FC = () => {

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const {signOut} = useAuth();

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }
  
  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
        <Header>

          <ToogleMenu onClick={handleToggleMenu}>
              {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
          </ToogleMenu>

          <LogoImg src={logoImg} alt="Logo minha carteira" />
          <Title>Minha Carteira</Title>
        </Header>

        <MenuContainer>
          <MenuItemLink to="/"><MdDashboard/>Dashboard</MenuItemLink>
          <MenuItemLink to="/list/entry-balance"><MdArrowDownward />Entradas</MenuItemLink>
          <MenuItemLink to="/list/exit-balance"><MdArrowUpward />Saídas</MenuItemLink>
          <MenuItemButton as="a" onClick={signOut}><MdExitToApp />Sair</MenuItemButton>
        </MenuContainer>

        <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
          <Toggle
            labelLeft='Light'
            labelRight='Dark'
            checked={darkTheme}
            onChange={handleChangeTheme} 
          />
        </ThemeToggleFooter>
    </Container>
  );
}

export default Aside;