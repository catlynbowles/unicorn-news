import React, {useState, useEffect} from "react";
import { getArticles } from "../../../apiCalls";

const HomeView = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles('home')
      .then(data => setArticles(data.results))
  }, [])

  return (
    <div>home</div>
  )
}

export default HomeView;