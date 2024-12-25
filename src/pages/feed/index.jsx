
//import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card/index';
import { UserInfo } from '../../components/UserInfo/index'

import { Container, Column, Title, TitleHighlight } from './styles';
import logo from '../../assets/hero-image.png';

const Feed = () => {
    return(<>
        <Header />
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
                    <UserInfo percentual={80} nome="jhonny g." image="https://avatars.githubusercontent.com/u/111026602?v=4" />
                    <UserInfo percentual={40} nome=" USER 2." image={logo} />
                    <UserInfo percentual={60} nome=" USER 3." image={logo} />
                    <UserInfo percentual={30} nome=" USER 4." image={logo} />
                    <UserInfo percentual={15} nome=" USER 5." image={logo} />
                </Column>
        </Container>
    </>)
}

export {Feed}