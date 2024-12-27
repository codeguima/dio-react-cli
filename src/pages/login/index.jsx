import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input/index';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { api } from '../../config/axios';

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.post('/login', { email: formData.email, senha: formData.password });
            
            if (data.success) {
                handleClickSignIn(); // Redireciona para o feed
            } else {
                alert('E-mail ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Houve um erro, tente novamente');
        }
    };

    const handleClickSignIn = () => {
        navigate('/feed');
    };

    const handleClickCadastro = () => {
        navigate('/cadastro');
    };

    return (
        <>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                control={control}
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                errorMessage={errors?.email?.message}
                            />
                            <Input
                                name="password"
                                control={control}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                                errorMessage={errors?.password?.message} 
                            />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleClickCadastro}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Login };
