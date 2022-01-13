import React from "react";
import { Container, Logo, Form, FormTitle} from './styles'

import LogoImg from '../../assets/logo.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>
            <Form >
                <FormTitle>Entrar</FormTitle>
                <Input type="email" placeholder="e-mail" required></Input>
                <Input type="password" placeholder="senha" required></Input>
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;