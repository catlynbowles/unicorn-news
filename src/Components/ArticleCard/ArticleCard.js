
const ArticleCard = ({title, picture, section, byline}) => {
  return (
    <div className="article-card">
      <img src={`${picture.url ? picture.url : 'none'}`}/>
      <h3>{title}</h3>
      <p>{byline}</p>
    </div>
  )
}

export default ArticleCard;