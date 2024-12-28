import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero-image.png';
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

  const { user, handleSignOut } = useAuth();


  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickCadastro = () => {
    navigate('/cadastro');
  };


  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/home'>
          <img src={logo} 
              alt="Imagem" 
              style={{ width: '60px', height: 'auto' }} 
          />
          </Link>
          
          {user.id ? (
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
          {user.id ? (
            <>
              <Link to="/feed">
              <UserPicture src= {hero} />
              </Link>
              <a href='/home' onClick={handleSignOut}>Sair</a>
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
