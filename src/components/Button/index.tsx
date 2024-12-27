import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, variant = "primary", onClick, disabled, type = 'button' }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} disabled={disabled} type={type}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
