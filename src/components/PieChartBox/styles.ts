import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    border-radius: 7px;
    display: flex;
`
export const SideLeft = styled.aside`
    padding: 30px 20px;
    h2 {
        margin-bottom: 20px;
        width: 30px;
    }
`
export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    svg {
        width: 100%;
    }
`
export const LegendContainer = styled.ul`
    list-style: none;
    height: 175px;
    padding-right: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary}; 
    }
`
export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    div {
        font-size: 15px;
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

