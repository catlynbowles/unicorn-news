import { Switch, Route } from "react-router-dom"
import CategoryView from '../Views/CategoryView/CategoryView'
import ArticleView from '../Views/ArticleView/ArticleView'

const Routes = ({articles, error}) => {
  return (
    <>
      <Route exact path='/'>
        <CategoryView articles={articles} error={error}/>
      </Route>
      <Route exact path='/article/:key' render={({match}) => {
        return  <ArticleView articles={articles} id={match.params['key']} error={error}/>
      }
      }/>
    </>
  )
}

export default Routes