import React, { useEffect } from "react"
import { useState } from "react"

const ArticleView = ({articles, id}) => {
  const [selectedArticle, setSelectedArticle] = useState('')
  console.log(id)

  useEffect(() => {
    articles.length && setSelectedArticle(articles.find(article => article.title === id))
  }, [])
  
  return (
    <div className="title">Article</div>
  )
}

export default ArticleView