import { useState, useEffect } from "react"

const BlogIndex = () => {
    const [articles, setArticles] = useState([])
    const fetchArticles = async () => {
        const response = await fetch("https://dev.to/api/articles?username=chinonsoike")
        const result = await response.json()
        console.log(result)
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <div>Coming Soon</div>
    )
}

export default BlogIndex