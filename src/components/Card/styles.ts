import styled from 'styled-components';

// Estilo para o container do card
export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651; /* Cor de fundo do container */
    position: relative;
    margin-bottom: 24px;
`;

// Estilo para a imagem de fundo
export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`;

// Estilo para o conteúdo do card
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    color: #ffffff80; /* Cor do texto */
`;

// Estilo para a seção de informações do usuário
export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
    }
`;

// Estilo para a imagem de perfil do usuário
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;
`;

// Estilo para as informações do post
export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`;

// Estilo para as hashtags e likes
export const HasInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff80;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
    }
`;
