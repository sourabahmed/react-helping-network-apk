import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/events'>
          <Events></Events>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
