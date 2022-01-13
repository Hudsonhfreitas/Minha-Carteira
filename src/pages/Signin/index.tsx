import React, { useState }from "react";
import { Container, Logo, Form, FormTitle} from './styles'

import LogoImg from '../../assets/logo.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {signIn} = useAuth()
    
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>
            <Form onSubmit={(e) => {
                e.preventDefault()
                signIn(email, password)
            }}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                    type="email" 
                    placeholder="e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input 
                    type="password" 
                    placeholder="senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;