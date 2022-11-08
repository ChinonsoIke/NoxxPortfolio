import Image from '../../atoms/image/image.component'
import { MobileNavStyles, NavBarStyles, NavStyles } from './navbar.styles'
import noxx from '../../../assets/icons/noxx2.svg'
import Link from '../../atoms/link/link.component'
import Menu from '../../../assets/icons/menu.svg'
import Close from '../../../assets/icons/close.svg'
import Button from '../../atoms/button/button.component'
import { useState } from 'react'

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  return (
    <>
      <NavBarStyles className='section'>
          <Link to="/" text={<Image src={noxx} height="4rem" width="12rem" fit="contain"/>}/>
          <NavStyles>
            <Link to="/" text="HOME" weight="600" color="whitesmoke" />
            <Link type="a" to="/#about" text="ABOUT" weight="600" color="whitesmoke" />
            <Link to="/blog" text="BLOG" weight="600" color="whitesmoke" />
          </NavStyles>
          <Button handleClick={toggleMobileNav} bg="none" text={<Image src={Menu} width="2rem" height="2rem" />} />
      </NavBarStyles>
      {showMobileNav && 
        <MobileNavStyles className='section'>
          <Button handleClick={toggleMobileNav} bg="none" text={<Image src={Close} width="2rem" height="2rem" />} />
          <Link to="/" text="HOME" weight="600" color="whitesmoke" />
          <Link type="a" to="/#about" text="ABOUT" weight="600" color="whitesmoke" />
          <Link to="/blog" text="BLOG" weight="600" color="whitesmoke" />
        </MobileNavStyles>}
    </>
  )
}

export default NavBar