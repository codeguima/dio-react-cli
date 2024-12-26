import React from 'react';
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
    Wrapper ,
    UserPicture
} from './styles';


const Header = ({autenticado}) => {

  const navigate = useNavigate();

    const handleClickLogin = () =>{
        navigate('/login')
    }
    const handleClickCadastro = () =>{
      navigate('/cadastro')
  }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio"
                style={{ width: '60px', height: 'auto' }} 
                 />
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
                    <UserPicture src ="https://avatars.githubusercontent.com/u/111026602?v=4" />
                 ) : (
                    <>
                    <MenuRight href="/home">Home</MenuRight>
                    <Button title="Entrar"  onClick={handleClickLogin}/>
                    <Button title="Cadastrar"  onClick={handleClickCadastro} />
                    </>
                 )}
            </Row>
        </Container>
    </Wrapper>
  );
};

export { Header };
