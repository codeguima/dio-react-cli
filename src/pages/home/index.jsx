import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import banner from '../../assets/banner.png';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')
    }
    
    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                        o seu futuro é aqui..!
                </Title>
                <TextContent>
                    Domine as tecnologias ultilizadas pelas empresas inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={banner} alt='Imagem Principal'
                    style={{ width: '500px', height: 'auto' }}

                />
            </div>
        </Container>
    </>)
}

export {Home}