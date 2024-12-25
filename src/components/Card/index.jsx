
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
import bannerImg from '../../assets/banner2.jpg';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={bannerImg}/>
            <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/111026602?v=4"/>
                    <div>
                        <h4>Jhonny Guimarães</h4>
                        <p>Há 8 minutos</p>
                    </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de React Developer</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio global...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#Html #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
            </Content>
    </CardContainer>
  )
};

export {Card};
