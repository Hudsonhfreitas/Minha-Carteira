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

    @media(max-width: 770px) {
        display: flex;
        width: 100%;
    }
`
export const SideLeft = styled.aside`
    padding: 30px 20px;
    h2 {
        margin-bottom: 20px;
        width: 30px;
    }

    @media(max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;
        h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`
export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
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

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
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

    @media(max-width: 1345px) {
        font-size: 14px;
        margin: 3px 0;
        div {
            width: 35px;
            height: 35px;
            line-height: 35px;
        }
        span {
            margin-left: 7px;
        }
    }
`

