import React, {useState, useEffect} from "react";
import { getArticles } from "../../../apiCalls";
import ArticleCard from "../../ArticleCard/ArticleCard";

const CategoryView = () => {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('home')

  useEffect(() => {
    getArticles(category)
      .then(data => setArticles(data.results))
  }, [])

  const generateArticleCards = (articles) => {
    return articles.length && articles.map(article => {
      return (
        <ArticleCard 
          title={article.title}
          picture={article.multimedia ? article.multimedia[1] : 'none'}
          section={article.section}
          byline={article.byline}
        />
      )
    })
  }

  return (
    <>
      <div>{!articles.length ? <h2>Loading...</h2> : generateArticleCards(articles)}</div>
    </>
  )
}

export default CategoryView;