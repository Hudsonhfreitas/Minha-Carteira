import React from "react";
import { Container, Logo, Form, FormTitle} from './styles'

import LogoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>
            <Form>
                <FormTitle>Entrar</FormTitle>
                <input type="text"></input>
                <input type="password"></input>
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SignIn;