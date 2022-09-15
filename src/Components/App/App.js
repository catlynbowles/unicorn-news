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

  return (
    <>
      <Header />
      <Routes articles={articles}/>
    </>
  );
}

export default App;
