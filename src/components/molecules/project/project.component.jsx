import React from 'react'
import Button from '../../atoms/button/button.component'
import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { ProjectStyles, Right, Skills, Tech } from './project.styles'
import Web from '../../../assets/icons/globe.svg'
import GitHub from '../../../assets/icons/github.svg'



const Project = ({project}) => {
  return (
    <ProjectStyles>
        <Image src={project.image} borderRadius="5px" height="12rem" width="18rem" />
        <Right>
            <div>
                <Text text={project.name} color="#2A2A2A" weight="600" size="1.5rem" />
                <Text text={project.description} color="#2A2A2A" weight="500" size="1rem" />            
            </div>
            <div>
                <Skills style={{marginBottom: '0.5rem'}}>                    
                    <Text text="TECHNOLOGIES:" color="#2A2A2A" weight="600" size="1rem" />
                    {project.technologies.map(s => <Text key={s} text={s} color="#2A2A2A" weight="500" size="0.8rem" 
                        background="#FDCA40" padding="0.2rem" borderRadius="5px" />)}
                </Skills>
                
                <Tech>
                    <Text text="LINKS:" color="#2A2A2A" weight="600" size="1rem" />
                    {project.links.website && <a href={project.links.website} target="_blank" className='link'>
                        <Image src={Web} height="16px" width="16px" />
                    </a>}

                    {project.links.github && <a href={project.links.github} target="_blank" className='link'>
                        <Image src={GitHub} height="16px" width="16px" />
                    </a>}
                </Tech>          
            </div>
        </Right>
    </ProjectStyles>
  )
}

export default Project