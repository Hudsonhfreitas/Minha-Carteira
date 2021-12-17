import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const ChartContainer = styled.div`
    height: 360px;
`
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2 {
        margin-bottom: 20px;
        padding-left: 3px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    &:not(:last-child) {
        margin-right: 15px;
    }
    div {
        background-color: ${props => props.color};
        width: 48px;
        height: 40px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
            margin-left: 5px;
    }
`

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
`;

