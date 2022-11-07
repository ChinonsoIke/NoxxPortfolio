import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { NavBarStyles, NavStyles } from './navbar.styles'
import noxx from '../../../assets/icons/noxx2.svg'
import Link from '../../atoms/link/link.component'

const NavBar = () => {
  return (
    <NavBarStyles className='section'>
        <Link to="/" text={<Image src={noxx} height="4rem" width="12rem" fit="contain"/>}/>
        <NavStyles>
          <Link to="/" text="HOME" weight="600" color="whitesmoke" />
          <Link type="a" to="/#about" text="ABOUT" weight="600" color="whitesmoke" />
          <Link to="/blog" text="BLOG" weight="600" color="whitesmoke" />
        </NavStyles>
    </NavBarStyles>
  )
}

export default NavBar