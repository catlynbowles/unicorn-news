import React, { useState, useEffect } from "react";
import { getArticles } from "../../../apiCalls";
import ArticleCard from "../../ArticleCard/ArticleCard";
import Dropdown from "../../Dropdown/Dropdown";

const CategoryView = () => {
  const [articles, setArticles] = useState([])
  const [subcategory, setSubcategory] = useState('')
  const [filteredSearch, setFilteredSearch] = useState([])

  useEffect(() => {
    getArticles('fashion')
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

  const handleSelect = (value) => {
    console.log(value)
    setSubcategory(value.toLowerCase())
  }

  const sortBySubCategory = (subcategory) => {
    const filterSelected = articles.filter(article => article.section === subcategory.toLowerCase())
    console.log(filterSelected)
    setArticles(filterSelected)
  }

  return (
    <>
      <Dropdown articles={articles} handleSelect={handleSelect} />
      <div>{!articles.length ? <h2>Loading...</h2> : generateArticleCards(articles)}</div>
    </>
  )
}

export default CategoryView;