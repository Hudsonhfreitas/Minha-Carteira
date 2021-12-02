import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .tag-filter {
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.color.white};
        transition: opacity .3s;
        &:not(:last-child) {
            margin-right: 10px;
        }
        &:hover {
            opacity: .7;
        }
        &-recurrent::after,
        &-eventual::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
        }
        &-recurrent::after {
            border-bottom: 10px solid ${props => props.theme.color.success};
        }
        &-eventual::after {
            border-bottom: 10px solid ${props => props.theme.color.warning};
        }
        
    }
`;