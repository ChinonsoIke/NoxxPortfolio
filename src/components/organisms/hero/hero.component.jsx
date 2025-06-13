import React from 'react'
import Button from '../../atoms/button/button.component'
import Text from '../../atoms/text/text.component'
import { HeroStyles, Left } from './hero.styles'
import noxx2 from '../../../assets/images/noxx.jpg'
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
              text="Experienced .NET Software Engineer specializing in enterprise-scale architecture and cloud-native development with 
              over 5 years of expertise in designing and implementing robust applications across Banking, Healthcare, and Consulting industries. 
              Strong expertise in distributed systems using Apache Kafka, Redis, and modern cloud platforms such as Microsoft Azure and 
              AWS to build resilient, high-performance systems. Proven track record in delivering scalable solutions that 
              balance technical excellence with business objectives."
              size="1rem" weight="300" color="whitesmoke" />
            <a href="https://docs.google.com/document/d/1AEvk3TsbLan5P6vuF1yGmkf5-JJPufX9gzs9R52xJBU/edit?usp=sharing" target="_blank">
              <Button text="Download Resume" />
            </a>
        </Left>
        <Image src={noxx2} borderRadius="50%" height="20rem" width="20rem" />
    </HeroStyles>
  )
}

export default Hero