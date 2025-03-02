import styled, {css} from 'styled-components';

export type ButtonColorVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  colorVariant: ButtonColorVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'pink',
  danger: 'red',
  success: 'green',

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width:100px;
  height: 50px;
  background-color: ${props => props.theme['green-500']}
  /* ${props => css`
  background-color: ${buttonVariants[props.colorVariant]}
  `} */
`