
import styled, { css } from 'styled-components';


const purple = '#8a2be2';
const magenta = '#ff00ff';
const cardBg = '#1c1c2a';
const textLight = '#ffffff';
const textSecondary = '#aaaaaa';
const buttonDiscord = '#5865f2';
const bgDark = '#0f0f1a';
const gradient = 'linear-gradient(90deg, #9933ff, #00bfff)'; 


 // Layout Principal e Card
export const LoginPageContainer = styled.div`
  /* Ocupa toda a tela, garantindo que o conteúdo esteja centralizado */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: #00000050; 
  border-bottom: 1px solid #ffffff10;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.h1`
  font-size: 1.5rem;
  color: ${textLight};
  font-weight: bold;
  letter-spacing: 2px;
  margin-left: 20px;
`;

export const LoginCard = styled.div`
  padding: 40px 30px;
  background-color: ${cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff15; 
  margin-top: 150px; /* Evita que o card fique sob o header */
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  color: ${magenta};
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 500;
`;


// Elementos de Formulário

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 12px;
  background-color: #00000080;
  border: 1px solid #ffffff15;
  border-radius: 8px;
  color: ${textLight};
  font-size: 1rem;

  &::placeholder {
    color: ${textSecondary};
  }

  &:focus {
    border-color: ${purple};
    box-shadow: 0 0 0 2px ${purple};
  }
`;


// Botões

const CommonButtonStyles = css`
  width: 100%;
  padding: 15px 10px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1; 
  border: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const MainButton = styled.button`
  ${CommonButtonStyles}
  color: ${textLight};
  background: ${gradient}; /* O gradiente roxo/ciano */
  margin-top: 5px;

  &:hover {
    filter: brightness(1.1);
  }
`;

const SocialButtonBase = styled.button`
  ${CommonButtonStyles}
  color: ${textLight};
  background-color: transparent;
  border: 1px solid #ffffff20;
  margin-bottom: 15px; 
  font-weight: 500;
`;

export const GoogleButton = styled(SocialButtonBase)`
  background-color: ${textLight};
  color: #000000;
  border-color: ${textLight};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SteamButton = styled(SocialButtonBase)`
  background-color: #00000080;
  border-color: #00bfff; /* Cor azul/ciano sutil da Steam */
  
  &:hover {
    background-color: #000000a0;
  }
`;

export const DiscordButton = styled(SocialButtonBase)`
  background-color: ${buttonDiscord}; 
  border: none;
  
  &:hover {
    filter: brightness(1.1);
  }
`;


// Outros Elementos

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 15px 0;
  width: 100%;
  color: ${textSecondary};
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ffffff10;
  }

  &:not(:empty)::before {
    margin-right: 1em;
  }

  &:not(:empty)::after {
    margin-left: 1em;
  }
`;

export const LinkText = styled.a`
  color: ${magenta};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;