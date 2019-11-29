import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './components/Home'
import LogOut from './components/LogOut'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <SignUp />
          </Route>
          <Route path="/log-in" exact={true}>
            <LogIn />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/log-out" exact={true}>
            <LogOut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
