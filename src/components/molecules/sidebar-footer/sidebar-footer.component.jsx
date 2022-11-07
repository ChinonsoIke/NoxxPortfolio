import React from 'react'
import { SidebarFooterStyles } from './sidebar-footer.styles'
import { Links } from '../../../assets/data/links'
import Image from '../../atoms/image/image.component'

const SidebarFooter = () => {
  return (
    <SidebarFooterStyles id='contact'>
        {Links.map(l => <a target="_blank" key={l.link} href={l.link}><Image src={l.icon} height="18px" width="18px" /></a>)}
    </SidebarFooterStyles>
  )
}

export default SidebarFooter