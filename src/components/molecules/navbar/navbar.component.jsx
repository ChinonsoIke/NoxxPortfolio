import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { NavBarStyles, NavStyles } from './navbar.styles'
import noxx from '../../../assets/icons/NOXX.svg'
import Link from '../../atoms/link/link.component'

const NavBar = () => {
  return (
    <NavBarStyles className='section'>
        <Image src={noxx} height="50px" width="200px"/>
        <NavStyles>
          <Link to="/" text="HOME" weight="600" color="whitesmoke" />
          <Link type="a" to="/#about" text="ABOUT" weight="600" color="whitesmoke" />
          <Link to="/blog" text="BLOG" weight="600" color="whitesmoke" />
          <Link type="a" to="/#contact" text="CONTACT" weight="600" color="whitesmoke" />
        </NavStyles>
    </NavBarStyles>
  )
}

export default NavBar