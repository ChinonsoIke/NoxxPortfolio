import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Image from '../../atoms/image/image.component'
import Text from '../../atoms/text/text.component'
import { BlogDetailStyles } from './blog-detail.styles'
import ReactHtmlParser from 'html-react-parser'; 
import Footer from '../../organisms/footer/footer.component'

const BlogDetail = () => {
    const [article, setArticle]  = useState({})
    const location = useLocation()
    console.log(location)
    const id = location.pathname.split('/')[2]

    const fetchArticle = async () => {
        const response = await fetch(`https://dev.to/api/articles/${id}`)
        const result = await response.json()
        setArticle(result)
        console.log(result)
    }

    useEffect(() => {
        fetchArticle()
    }, [])

  return (
    <>
        {Object.keys(article).length > 0 &&
        <BlogDetailStyles>
            <Image src={article.cover_image} width="100%" height="60vh" />
            <Text className="title" text={article.title} weight="600" size="2.5rem" />
            <Text text={new Date(article.published_at).toDateString()} size="1rem" weight="500" />
            <div className="tags">
                {article.tags.map(t => 
                    <Text text={t} size="0.8rem" weight="600" borderRadius="5px" background="#FDCA40" padding="0 0.5rem" />)}
            </div>
            <Text text={ReactHtmlParser(article.body_html)} />
        </BlogDetailStyles>}
        <Footer/>
    </>
  )
}

export default BlogDetail