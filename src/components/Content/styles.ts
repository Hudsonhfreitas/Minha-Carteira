import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.color.white};
    background-color:${props => props.theme.color.primary};
`;