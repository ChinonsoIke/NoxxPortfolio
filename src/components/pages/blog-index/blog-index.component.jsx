import { useState, useEffect } from "react"
import BlogCard from "../../molecules/blog-card/blog-card.component"
import Footer from "../../organisms/footer/footer.component"
import { BlogIndexStyles } from "./blog-index.styles"

const BlogIndex = () => {
    const [articles, setArticles] = useState([])
    const fetchArticles = async () => {
        const response = await fetch("https://dev.to/api/articles?username=chinonsoike")
        const result = await response.json()
        setArticles(result)
        console.log(result)
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <>
            <BlogIndexStyles>
                {articles.length > 0 && articles.map(a => 
                    <BlogCard key={a.id} published_at={a.published_at} image={a.cover_image} desc={a.description} title={a.title} id={a.id} />)}
            </BlogIndexStyles>
            <Footer/>
        </>
    )
}

export default BlogIndex