import { Switch, Route } from "react-router-dom"
import HomeView from '../Views/CategoryView/CategoryView'
import ArticleView from '../Views/ArticleView/ArticleView'

const Routes = () => {
  return (
    <Switch>
      <Route to='/'>
        <HomeView />
      </Route>
      <Route to='/:article'>
        <ArticleView />
      </Route>
    </Switch>
  )
}

export default Routes