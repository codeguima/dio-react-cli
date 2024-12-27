import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${({ disabled }) => (disabled ? '#cccccc' : '#565656')};
  border-radius: 22px;
  position: relative;
  margin-right: 12px;
  margin-left: 12px;
  color: ${({ disabled }) => (disabled ? '#666666' : '#ffffff')};
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s;

  ${({ variant, disabled }) =>
    variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;
      background: ${disabled ? '#cccccc' : '#e4105d'};

      &:hover {
        opacity: ${disabled ? 1 : 0.6};
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid ${disabled ? '#cccccc' : '#e4105d'};
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
