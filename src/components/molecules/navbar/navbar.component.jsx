import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { NavBarStyles, NavStyles } from './navbar.styles'
import react from '../../../assets/icons/react.png'

const NavBar = () => {
  return (
    <NavBarStyles className='section'>
        <Image src={react} height="50px" width="50px"/>
        <NavStyles>
            <Text text="HOME" weight="600" color="whitesmoke" />
            <Text text="ABOUT" weight="600" color="whitesmoke" />
            <Text text="BLOG" weight="600" color="whitesmoke" />
        </NavStyles>
    </NavBarStyles>
  )
}

export default NavBar