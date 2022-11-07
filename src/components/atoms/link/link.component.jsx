import React from 'react'
import { CustomAnchor, CustomLink } from './link.styles'

const Link = ({type, to, text, size, weight, color, padding, background}) => {
  return (
    type === 'a' ? <CustomAnchor href={to} size={size} weight={weight} color={color} 
    background={background} padding={padding}>{text}</CustomAnchor>
        : <CustomLink to={to} size={size} weight={weight} color={color} 
        background={background} padding={padding}>{text}</CustomLink>
  )
}

export default Link