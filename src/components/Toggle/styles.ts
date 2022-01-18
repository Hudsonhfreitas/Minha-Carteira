import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 600px) {
        &.hidden {
            display: none;
        }
    }
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.color.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.color.info,
        offColor: theme.color.warning
    })
)<ReactSwitchProps>`
    margin: 0 7px;
`;