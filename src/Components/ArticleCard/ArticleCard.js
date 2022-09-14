import { Link } from "react-router-dom";

const ArticleCard = ({ title, picture, section, byline, findIndividualArticle }) => {
  return (
    <div className="article-card">
      <img src={`${picture.url}`} />
      <h3>{title}</h3>
      <p>{byline}</p>
      <Link to={`/article/${title}`}>
        <p onClick={() => findIndividualArticle(title)}>Learn More</p>
      </Link>
    </div>
  )
}

export default ArticleCard;