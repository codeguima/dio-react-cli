import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md';
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
    phone: yup.string().min(10, 'No mínimo 10 caracteres').required(),
    name: yup.string().min(10, 'No mínimo 10 caracteres').required(),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            
            const { data: existingUser } = await api.get(`/users?email=${formData.email}`);
            if (existingUser.length > 0) {
                alert('Este e-mail já está cadastrado!');
                return; 
            }

            
            const { data } = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

           
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            alert('Houve um erro ao tentar cadastrar, tente novamente');
        }
    };

    const handleClickLogin = () => {
        navigate('/login');
    };

    const handleClickHome = () => {
        navigate('/home');
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
                        <SubtitleLogin>Preencha seus dados:</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="name"
                                control={control}
                                placeholder="Nome"
                                leftIcon={<MdPerson />}
                                errorMessage={errors?.name?.message}
                            />
                            <Input
                                name="email"
                                control={control}
                                placeholder="Seu melhor E-mail"
                                type="email"
                                leftIcon={<MdEmail />}
                                errorMessage={errors?.email?.message} 
                            />
                            <Input
                                name="phone"
                                control={control}
                                placeholder="+55(99)99999-9999"
                                leftIcon={<MdPhone />}
                                errorMessage={errors?.phone?.message}
                            />
                            <Input
                                name="password"
                                control={control}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                                errorMessage={errors?.password?.message} 
                            />
                            <Button title="Criar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText onClick={handleClickHome}>voltar</EsqueciText>
                            <CriarText onClick={handleClickLogin} >Fazer Login</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Cadastro };
