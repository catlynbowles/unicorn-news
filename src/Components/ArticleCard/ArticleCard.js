import { Link } from "react-router-dom";
import './ArticleCard.scss'

const ArticleCard = ({ title, byline, id}) => {
  return (
    <div tabIndex='0' className="article-card">
      <h3 tabIndex='0'>{title}</h3>
      <p tabIndex='0'>{byline}</p>
      <Link to={`/article/${id}`}>
        <p>Learn More</p>
      </Link>
    </div>
  )
}

export default ArticleCard;