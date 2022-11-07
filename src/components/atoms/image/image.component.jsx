import React from 'react'
import { CustomImage } from './image.styles'

const Image = ({src, borderRadius, height, width, fit}) => {
  return (
    <CustomImage src={src} borderRadius={borderRadius} fit={fit} height={height} width={width} />
  )
}

export default Image