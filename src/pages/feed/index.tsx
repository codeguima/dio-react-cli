import React from 'react';
import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card/index';
import { UserInfo } from '../../components/UserInfo/index';
import { Container, Column, Title, TitleHighlight } from './styles';
import hero from '../../assets/hero-image.png';


const Feed = () => {
    
    
    const rankingUsers = [
        { percentual: 80, nome: 'USER 1', image: hero },
        { percentual: 40, nome: 'USER 2', image: hero },
        { percentual: 60, nome: 'USER 3', image: hero },
        { percentual: 30, nome: 'USER 4', image: hero },
        { percentual: 15, nome: 'USER 5', image: hero },
    ];



    return (
        <>
            <Header />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    {[...Array(6)].map((_, index) => (
                        <Card key={index} />
                    ))}
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    {rankingUsers.map((user, index) => (
                        <UserInfo
                            key={index}
                            percentual={user.percentual}
                            nome={user.nome}
                            image={user.image}
                        />
                    ))}
                </Column>
            </Container>
        </>
    );
};

export { Feed };
