import React from 'react';

import { Container, NameText, Progress, UserPicture } from './styles';


interface UserInfoProps {
  nome: string;     
  image: string;     
  percentual: number; 
}

const UserInfo: React.FC<UserInfoProps> = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };
