import { Switch, Route } from "react-router-dom"
import CategoryView from '../Views/CategoryView/CategoryView'
import ArticleView from '../Views/ArticleView/ArticleView'

const Routes = ({articles}) => {
  return (
    <>
      <Route exact path='/'>
        <CategoryView articles={articles} />
      </Route>
      <Route exact path='/article/:key' render={({match}) => {
        return  <ArticleView articles={articles} id={match.params['key']}/>
      }
      }/>
    </>
  )
}

export default Routes