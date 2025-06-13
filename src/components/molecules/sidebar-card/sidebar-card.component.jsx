import React from 'react'
import Image from '../../atoms/image/image.component'
import { CardStyles } from './sidebar-card.styles'
import noxx2 from '../../../assets/images/noxx.jpg'
import Text from '../../atoms/text/text.component'

const SidebarCard = () => {
  return (
    <CardStyles>
        <Image src={noxx2} height="5rem" width="5rem" borderRadius="50%" />
        <Text text="CHINONSO IKEWELUGO" weight="600" />
        <Text text="Full Stack Software Engineer" />
    </CardStyles>
  )
}

export default SidebarCard