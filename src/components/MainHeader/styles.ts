import styled from 'styled-components';

import ToggleComponent from '../Toggle';

export const Container = styled.div`
    grid-area: MH;    
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secondary};
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.color.gray};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Profile = styled.div`
    color: ${props => props.theme.color.white};
`;

export const Welcome = styled.h3`
    
`;

export const UserName = styled.span`
    
`;
