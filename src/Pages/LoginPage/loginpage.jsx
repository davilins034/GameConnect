// src/Pages/LoginPage/loginpage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

// 1. Importe os componentes estilizados que você criou!
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
} from './LoginPage.styles.js'; // Garanta que o caminho está correto

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
    // 2. Substitua o HTML antigo pelos seus novos componentes
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
        
        {/* Adicionando os botões sociais para um visual completo */}
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