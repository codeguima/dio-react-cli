import {MdEmail, MdLock} from 'react-icons/md';
import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input/index';

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';


const Login = () => {
    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais
                    tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu Login</SubtitleLogin>
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="password"/>
                </form>
                <Row>
                    <EsqueciText>Esqeci minha senha </EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
                
            </Column>
        </Container>
    </>)
}

export {Login}