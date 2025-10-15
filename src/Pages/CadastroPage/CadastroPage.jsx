import React from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPage = () => {
    
    const navigate = useNavigate(); 
    
    

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #0f0f1a, #8a2be2)', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '20px'
        }}>
            <h1>Página de Cadastro</h1>
            <p>Componente pronto para ser desenvolvido.</p>
            
            
            <button 
                onClick={() => navigate('/login')} 
                style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', background: '#ff00ff', border: 'none', borderRadius: '5px', color: 'white' }}
            >
                Voltar para Login
            </button>
        </div>
    );
};


export default CadastroPage;