import React from 'react'
import { BlodCardStyles } from './blog-card.styles'
import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import Button from '../../atoms/button/button.component'
import { Link } from 'react-router-dom'

const BlogCard = ({image, title, desc, id, published_at}) => {
  return (
    <BlodCardStyles>
        <Image src={image} width="100%" height="50%" />
        <div className='content'>
            <Text text={title} weight="600" color="whitesmoke" />
            {/* <Text text={`${desc.substring(0,60)}...`} size="0.8rem" weight="400" color="whitesmoke" /> */}
            <Text text={new Date(published_at).toDateString()} size="0.8rem" weight="400" color="whitesmoke" />
            <Link to={`/blog/${id}`}><Button text="Read More" /></Link>
        </div>
    </BlodCardStyles>
  )
}

export default BlogCard