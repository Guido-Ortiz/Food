import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import FormRecipe from './components/FormRecipe/FormRecipe';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Landing />
        </Route>

        <Route exact path='/home'>
          <Home />
        </Route>

        <Route exact path='/form'>
          <FormRecipe />
        </Route>

        <Route exact path='/:id'>
          <Detail />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
