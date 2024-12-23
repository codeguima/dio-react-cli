import React from 'react';

import { IconContainer, InputContainer, InputText } from './styles';

const Input = ({ leftIcon, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };
