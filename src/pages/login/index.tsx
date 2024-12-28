import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input/index';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './types';
import { useAuth } from '../../hooks/useAuth';

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    await handleLogin(formData);
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
            <TitleLogin>Faça seu Login</TitleLogin>
            <SubtitleLogin>Entre com suas credenciais:</SubtitleLogin>
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
              <Button title="Entrar" variant="secondary" type="submit" disabled={!isValid} />
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
