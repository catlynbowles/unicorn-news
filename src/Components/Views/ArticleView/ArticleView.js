import React, { useEffect } from "react"
import { useState } from "react"
import './ArticleView.scss'
import { Link } from "react-router-dom"
import Error from "../../Error/Error"

const ArticleView = ({ articles, id, error }) => {
  const [selectedArticle, setSelectedArticle] = useState('')

  useEffect(() => {
    articles.length && setSelectedArticle(articles.find(article => {
      return articles.indexOf(article).toString() === id
    }))
  }, [articles])

  return (
    <section className="article-page">
      <Link className='home-link' to='/'>Back to Home</Link>
      {error ? <Error /> :
      !selectedArticle ? <h2>Loading...</h2> :
        <div>
          <h2 tabIndex='0'>{selectedArticle.title}</h2>
          <p tabIndex='0'>{selectedArticle.byline}</p>
          <p tabIndex='0'>Published {selectedArticle.published_date.substr(0, 10)}</p>
          <img tabIndex='0' src={selectedArticle.multimedia[1].url} alt={selectedArticle.multimedia[1].caption}></img>
          <div className='content-body'>
            <p tabIndex='0'>{selectedArticle.multimedia[1].caption}</p>
            <p tabIndex='0'>{selectedArticle.abstract}</p>
          </div>
          <a href={selectedArticle.url}>Link to Full Article</a>
        </div>
      }
    </section>
  )
}

export default ArticleView