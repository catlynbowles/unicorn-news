import Routes from '../Routes/Routes';
import { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getArticles('arts')
      .then(data => setArticles(data.results))
      .catch(error => setError(error))
  }, [])

  return (
    <>
      <Header />
      <Routes articles={articles} error={error} />
    </>
  );
}

export default App;
