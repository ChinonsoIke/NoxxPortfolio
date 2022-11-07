import NavBar from '../../molecules/navbar/navbar.component'
import Footer from '../../organisms/footer/footer.component'
import Hero from '../../organisms/hero/hero.component'
import Projects from '../../organisms/projects/projects.component'
import SideBar from '../../organisms/sidebar/sidebar.component'
import { HomeStyles, Left, Right } from './home.styles'

const Home = () => {
  return (
    <>
      {/* <NavBar/> */}
      <HomeStyles>
          <Left>
              <SideBar/>
          </Left>
          <Right>
              <Hero/>
              <Projects/>
              <Footer/>
          </Right>
      </HomeStyles>
    </>
  )
}

export default Home