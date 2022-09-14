import { Switch, Route } from "react-router-dom"
import CategoryView from '../Views/CategoryView/CategoryView'
import ArticleView from '../Views/ArticleView/ArticleView'

const Routes = ({articles}) => {
  return (
    <>
      <Route exact path='/'>
        <CategoryView articles={articles} />
      </Route>
      <Route exact path='/article/:byline' render={({match}) => {
        console.log('match', match)
        return  <ArticleView articles={articles} id={match.params['byline']}/>
      }
      }/>
    </>
  )
}

export default Routes