// src/pages/LoginPage/LoginPage.jsx
import React from 'react';
import { 
  LoginPageContainer, 
  Header, 
  AppLogo, 
  LoginCard, 
  Title, 
  Form, 
  Input, 
  MainButton, 
  GoogleButton, 
  SteamButton, 
  DiscordButton, 
  Separator, 
  LinkText 
} from './loginpage.styles'; 

const LoginPage = () => {
    
    // Função para lidar com o envio do formulário de login padrão
    const handleEmailLogin = (e) => {
        e.preventDefault();
        // **AQUI ENTRA A LÓGICA DE AUTENTICAÇÃO POR EMAIL/SENHA**
        console.log("Tentativa de Login com Email e Senha");
        // Exemplo: chamar uma API de autenticação
    }

    // Funções de exemplo para os botões sociais
    const handleSocialLogin = (platform) => {
        // **AQUI ENTRA A LÓGICA DE REDIRECIONAMENTO/POP-UP DE AUTENTICAÇÃO SOCIAL**
        console.log(`Iniciando login com ${platform}`);
    }

    return (
        // O Header simples é incluído aqui, conforme a imagem, 
        // mas você pode substituí-lo pelo seu componente Cabeçalho.jsx 
        // se ele for genérico o suficiente.
        
        <LoginPageContainer>
            <Header>
                <AppLogo>GAMECONNECT</AppLogo>
            </Header>

            <LoginCard>
                <Title>Login</Title>
                
                <Form onSubmit={handleEmailLogin}>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        required 
                    />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        required 
                    />
                    
                    <MainButton type="submit">
                        Entrar
                    </MainButton>
                </Form>

                <Separator>ou entre com</Separator>

                {/* Botões Sociais */}
                <GoogleButton onClick={() => handleSocialLogin('Google')}>
                    Login com Google
                </GoogleButton>
                
                <SteamButton onClick={() => handleSocialLogin('Steam')}>
                    Login com Steam
                </SteamButton>
                
                <DiscordButton onClick={() => handleSocialLogin('Discord')}>
                    Login com Discord
                </DiscordButton>

                <LinkText 
                    href="/cadastro" 
                    onClick={(e) => {
                        e.preventDefault(); 
                        console.log('Navegar para Criar Conta');
                        // Use o useNavigate do react-router-dom para navegação
                    }}>
                    Criar conta
                </LinkText>
            </LoginCard>
        </LoginPageContainer>
    );
}

export default LoginPage;