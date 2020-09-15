import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        Login to View Your Friends
      </header>
      <Link to='/login'>Login</Link>
    <Switch>
      <Route exact path='/friends' />
      <Route path ='/login' component={Login}/>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
