import React, { useEffect } from "react"
import { useState } from "react"
import './ArticleView.scss'

const ArticleView = ({ articles, id }) => {
  const [selectedArticle, setSelectedArticle] = useState('')
  console.log(id)

  useEffect(() => {
    articles.length && setSelectedArticle(articles.find(article => {
      return articles.indexOf(article).toString() === id
    }))
  }, [articles])

  return (
    <section className="article-page">
      {!selectedArticle ? <h2>Loading...</h2> :
        <div>
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.byline}</p>
          <p>Published {selectedArticle.published_date.substr(0, 10)}</p>
          <img src={selectedArticle.multimedia[1].url} alt={selectedArticle.multimedia[1].caption}></img>
          <div className='content-body'>
            <p>{selectedArticle.multimedia[1].caption}</p>
            <p>{selectedArticle.abstract}</p>
          </div>
          <a href={selectedArticle.url}>Link to Full Article</a>
        </div>
      }
    </section>
  )
}

export default ArticleView