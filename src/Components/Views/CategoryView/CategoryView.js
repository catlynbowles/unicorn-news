import React, { useState, useEffect } from "react";
import './CategoryView.scss'
import ArticleCard from "../../ArticleCard/ArticleCard";
import Dropdown from "../../Dropdown/Dropdown";
import Error from "../../Error/Error";

const CategoryView = ({ articles, error }) => {
  const [filteredSearch, setFilteredSearch] = useState([])

  const generateArticleCards = (articles) => {
    return articles.length && articles.map((article, index) => {
      return (
        <ArticleCard
          title={article.title}
          picture={article.multimedia[1]}
          section={article.section}
          byline={article.byline}
          key={index}
          id={index}
        />
      )
    })
  }

  const handleSelect = (value) => {
    sortBySubCategory(value)
  }

  const sortBySubCategory = (subcategory) => {
    const filterSelected = articles.filter(article => article.section === subcategory.toLowerCase())
    setFilteredSearch(filterSelected)
  }

  return (
    <section className='article-container'>
      <div className='cards'>
        <Dropdown articles={articles} handleSelect={handleSelect} />
        {error ? <Error /> :
          !articles.length && !filteredSearch.length ? <h2>Loading...</h2> :
            filteredSearch.length ? generateArticleCards(filteredSearch) :
              articles.length && generateArticleCards(articles)}
      </div>
    </section>
  )
}

export default CategoryView;