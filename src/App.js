import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import RegisterData from './pages/RegisterData/RegisterData'
import Register from './pages/Register/Register'
import AuthProvider from './pages/context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registerData'>
              <RegisterData></RegisterData>
            </Route>
            <PrivateRoute path='/register/:registerId'>
              <Register></Register>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;



