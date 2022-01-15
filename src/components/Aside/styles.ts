import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.color.gray};
    position: relative;

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        width: 200px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.color.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title= styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink= styled(Link)`
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.info};
    text-decoration: none;
    transition: opacity .3s;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.info};
    text-decoration: none;
    transition: opacity .3s;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`
export const ToogleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.color.warning};
    color: ${props => props.theme.color.white};
    transition: opacity .3s;
    justify-content: center;
    align-items: center;
    display: none;

    &:hover {
        opacity: 0.7;
    }

    @media(max-width: 600px) {
        display: flex;
    }
`

