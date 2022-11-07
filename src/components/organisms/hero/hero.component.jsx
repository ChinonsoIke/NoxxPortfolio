import React from 'react'
import Button from '../../atoms/button/button.component'
import Text from '../../atoms/text/text.component'
import { HeroStyles, Left } from './hero.styles'
import Noxx from '../../../assets/images/noxx.jpg'
import Image from '../../atoms/image/image.component'

const Hero = () => {
  return (
    <HeroStyles id='about'>
        <Left>
          <div>
            <Text 
              text="Hello, 👋"
              size="1.5rem" weight="700" color="whitesmoke" />
            <Text 
              text="I'm Chinonso Ikewelugo"
              size="2.5rem" weight="700" color="whitesmoke" />
          </div>
            <Text 
              text="A results-driven, highly organized and analytical software engineer, with 
                over three years of professional experience in design, development, integration, 
                and delivery of web applications."
              size="1rem" weight="300" color="whitesmoke" />
            <a href="https://docs.google.com/document/d/1AEvk3TsbLan5P6vuF1yGmkf5-JJPufX9gzs9R52xJBU/edit?usp=sharing" target="_blank">
              <Button text="Download Resume" />
            </a>
        </Left>
        <Image src={Noxx} borderRadius="50%" height="20rem" width="20rem" />
    </HeroStyles>
  )
}

export default Hero