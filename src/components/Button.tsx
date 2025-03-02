import { ButtonColorVariant, ButtonContainer } from './Button.styles';

interface ButtonProps {
  colorVariant?: ButtonColorVariant;
}

export function Button({colorVariant = 'primary'}: ButtonProps){
  return <ButtonContainer colorVariant={colorVariant}> Enviar </ButtonContainer>
}