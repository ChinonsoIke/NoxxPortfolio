import React from 'react'
import Text from '../../atoms/text/text.component'
import SidebarFooter from '../../molecules/sidebar-footer/sidebar-footer.component'
import { FooterStyles } from './footer.styles'

const Footer = () => {
  return (
    <FooterStyles className="section">
        <Text text="© 2022 Chinonso Ikewelugo" color="whitesmoke" weight="100" size="0.8rem" />
        <SidebarFooter/>
    </FooterStyles>
  )
}

export default Footer