import { Link } from "react-router-dom";
import './ArticleCard.scss'

const ArticleCard = ({ title, byline, id}) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{byline}</p>
      <Link to={`/article/${id}`}>
        <p>Learn More</p>
      </Link>
    </div>
  )
}

export default ArticleCard;