import React from 'react'
import SidebarCard from '../../molecules/sidebar-card/sidebar-card.component'
import SidebarFooter from '../../molecules/sidebar-footer/sidebar-footer.component'
import Skills from '../../molecules/skills/skills.component'
import { SidebarStyles } from './sidebar.styles'

const SideBar = () => {
  return (
    <SidebarStyles>
        <SidebarCard/>
        <Skills/>
        <SidebarFooter/>
    </SidebarStyles>
  )
}

export default SideBar