import Routes from '../Routes/Routes';
import { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles('arts')
      .then(data => setArticles(data.results))
  }, [])

  const findIndividualArticle = (article) => {
    console.log(article)
  }

  return (
    <>
      <Header />
      <Routes articles={articles} findIndividualArticle={findIndividualArticle}/>
    </>
  );
}

export default App;
