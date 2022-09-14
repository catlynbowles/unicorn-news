import { Switch, Route } from "react-router-dom"
import CategoryView from '../Views/CategoryView/CategoryView'
import ArticleView from '../Views/ArticleView/ArticleView'

const Routes = ({articles}) => {
  return (
    <>
      <Route exact path='/'>
        <CategoryView articles={articles} />
      </Route>
      <Route exact path='/article/:title' render={({match}) => 
        <ArticleView articles={articles} id={match.params['title']}/>
      }/>
    </>
  )
}

export default Routes