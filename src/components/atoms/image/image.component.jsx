import React from 'react'
import { CustomImage } from './image.styles'

const Image = ({src, borderRadius, height, width}) => {
  return (
    <CustomImage src={src} borderRadius={borderRadius} height={height} width={width} />
  )
}

export default Image