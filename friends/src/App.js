import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     
      <Link to='/login'>Login</Link> to View Your Friends
     
      
    <Switch>
      <PrivateRoute exact path='/friends' />
      <Route path ='/login' component={Login}/>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
