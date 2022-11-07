import React from 'react'
import { technologies } from '../../../assets/data/technologies'
import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { SkillSet, SkillsStyles } from './skills.styles'

const Skills = () => {
  return (
      <SkillsStyles>
        <Text text="SKILLS" color="#2A2A2A" weight="600" size="1rem" />
        <hr />
        {technologies.map(t => {
            return <SkillSet key={t.name}>
                <Image src={t.icon} height="22px" width="22px" />
                <Text text={t.name} weight="600" size="0.8rem"/>
            </SkillSet>
        })}
    </SkillsStyles>
  )
}

export default Skills