import React, {useState, useEffect} from "react";

const HomeView = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=KpGXEIs5cAOuYVP8yMXUB6KozjLLEkzC')
      .then(response => response.json())
      .then(data => {
        console.log(data.results[1])
        setArticles(data.results)})
  }, [])

  return (
    <div>home</div>
  )
}

export default HomeView;