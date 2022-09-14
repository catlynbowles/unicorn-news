import React, { useState, useEffect } from "react";
import { getArticles } from "../../../apiCalls";
import ArticleCard from "../../ArticleCard/ArticleCard";
import Dropdown from "../../Dropdown/Dropdown";

const CategoryView = ({articles}) => {
  const [filteredSearch, setFilteredSearch] = useState([])

  const generateArticleCards = (articles) => {
    return articles.length && articles.map((article, index) => {
      console.log(index)
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
    console.log(filterSelected)
    setFilteredSearch(filterSelected)
  }

  return (
    <>
      <Dropdown articles={articles} handleSelect={handleSelect} />
      <div>{!articles.length && !filteredSearch.length ? <h2>Loading...</h2> :
        filteredSearch.length ? generateArticleCards(filteredSearch) :
          articles.length && generateArticleCards(articles)
      }
      </div>
    </>
  )
}

export default CategoryView;