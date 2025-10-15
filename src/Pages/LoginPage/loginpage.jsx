

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';


import {
  LoginPageContainer,
  LoginCard,
  Title,
  Form,
  Input,
  MainButton,
  Separator,
  LinkText,
  DiscordButton,
  GoogleButton,
  SteamButton,
  Header,
  AppLogo
} from './LoginPage.styles.js'; 

function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLoginSubmit = (event) => {
     console.log("FUNÇÃO handleLoginSubmit FOI CHAMADA!");
    event.preventDefault();
    auth.login();
    navigate('/dashboard');
  };

  return (
    
    <LoginPageContainer>
      <Header>
        <AppLogo>GAMECONNECT</AppLogo>
      </Header>

      <LoginCard>
        <Title>Bem-vindo de volta!</Title>
        
        <Form onSubmit={handleLoginSubmit}>
          <Input type="email" required placeholder="Email" />
          <Input type="password" required placeholder="Senha" />
          <MainButton type="submit">Entrar</MainButton>
        </Form>

        <LinkText onClick={() => alert('Funcionalidade a ser implementada!')}>
          Esqueceu sua senha?
        </LinkText>

        <Separator>OU</Separator>

        <DiscordButton>Continuar com Discord</DiscordButton>
        <GoogleButton>Continuar com Google</GoogleButton>
        <SteamButton>Continuar com Steam</SteamButton>
        
        <LinkText onClick={() => navigate('/cadastro')}>
          Não tem uma conta? Cadastre-se
        </LinkText>
      </LoginCard>
    </LoginPageContainer>
  );
}

export default LoginPage;