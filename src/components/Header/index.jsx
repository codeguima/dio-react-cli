import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import logo from '../../assets/logo.png';
import { 
    BuscarInputContainer, 
    Container, 
    Input, 
    Menu, 
    MenuRight, 
    Row, 
    Wrapper,
    UserPicture 
} from './styles';

const Header = () => {
  const navigate = useNavigate();
  // Supondo que a autenticação seja salva no localStorage
  const [autenticado, setAutenticado] = useState(localStorage.getItem('auth') === 'true');

  // Função para login
  const handleClickLogin = () => {
    navigate('/login');
  };

  // Função para cadastro
  const handleClickCadastro = () => {
    navigate('/cadastro');
  };

  // Função de logout
  const handleLogout = () => {
    // Remove a informação de autenticação do localStorage
    localStorage.removeItem('auth');
    // Atualiza o estado para indicar que o usuário não está mais autenticado
    setAutenticado(false);
    // Redireciona o usuário para a página inicial ou login
    navigate('/login');
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" style={{ width: '60px', height: 'auto' }} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/111026602?v=4" />
              <Button title="Sair" onClick={handleLogout} /> {/* Botão de logout */}
            </>
          ) : (
            <>
              <MenuRight href="/home">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin} />
              <Button title="Cadastrar" onClick={handleClickCadastro} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
