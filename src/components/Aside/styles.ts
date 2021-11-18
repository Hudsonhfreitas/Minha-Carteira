import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.color.gray};
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title= styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink= styled.a`
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

