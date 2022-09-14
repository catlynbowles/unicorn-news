import { Link } from "react-router-dom";

const ArticleCard = ({ title, byline}) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{byline}</p>
      <Link to={`/article/${byline}`}>
        <p>Learn More</p>
      </Link>
    </div>
  )
}

export default ArticleCard;