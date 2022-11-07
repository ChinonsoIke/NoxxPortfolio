import React from 'react'
import Button from '../../atoms/button/button.component'
import Text from '../../atoms/text/text.component'
import { Header, ProjectsStyles } from './projects.styles'
import { Frontend, Backend } from '../../../assets/data/projects'
import { useState } from 'react'
import Project from '../../molecules/project/project.component'

const Projects = () => {
    const [projects, setProjects] = useState(Frontend)

    const toggleBackend = () => {
        setProjects(Backend)
    }
    const toggleFrontend = () => {
        setProjects(Frontend)
    }

    return (
        <>
            <Header>
                <Text text="PROJECTS" color="#2A2A2A" weight="600" size="1.5rem" />
                <div className='buttons'>
                    <Button focusBorder="#2A2A2A" handleClick={toggleFrontend} text="Frontend" />
                    <Button focusBorder="#FDCA40" handleClick={toggleBackend} text="Backend" textColor="#FDCA40" bg="#2A2A2A" />
                </div>
            </Header>
            <ProjectsStyles className='section'>
                {projects.map(p => <Project project={p} key={p.name} />)}
            </ProjectsStyles>
        </>
    )
}

export default Projects