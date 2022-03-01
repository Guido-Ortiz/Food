import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
