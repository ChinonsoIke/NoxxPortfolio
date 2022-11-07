import { CustomButton } from './button.styles'

const Button = ({handleClick, bg, textColor, text, focusBorder}) => {
  return (
    <CustomButton onClick={handleClick} bg={bg} textColor={textColor} focusBorder={focusBorder}>{text}</CustomButton>
  )
}

export default Button