import React from 'react'
import { CustomText } from './text.styles'

const Text = ({text, size, weight, color, padding, background, borderRadius}) => {
  return (
    <CustomText size={size} weight={weight} color={color} 
        background={background} padding={padding} borderRadius={borderRadius}>{text}</CustomText>
  )
}

export default Text