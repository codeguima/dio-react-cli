
//import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card/index';
import { UserInfo } from '../../components/UserInfo/index'

import { Container, Column, Title, TitleHighlight } from './styles';
import hero from '../../assets/hero-image.png';



const Feed = () => {
    return(<>
        <Header autenticado={true}/>
            <Container>
                <Column flex ={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} nome=" USER 1"  image={hero} />
                    <UserInfo percentual={40} nome=" USER 2." image={hero} />
                    <UserInfo percentual={60} nome=" USER 3." image={hero} />
                    <UserInfo percentual={30} nome=" USER 4." image={hero} />
                    <UserInfo percentual={15} nome=" USER 5." image={hero} />
                </Column>
        </Container>
    </>)
}

export {Feed}