import React from 'react';
import { Controller, Control } from 'react-hook-form'; // Importando o tipo Control para tipar o controle
import { ErrorText, IconContainer, InputContainer, InputText } from './styles';


interface InputProps {
  leftIcon?: React.ReactNode; 
  name: string;               
  control: Control<any>;      
  errorMessage?: string;      
  [rest: string]: any;        
}

const Input: React.FC<InputProps> = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }} // Definindo uma regra de validação simples
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export { Input };
