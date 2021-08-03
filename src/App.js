import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path="/users">< Users /></Route>
          <Route path="/about" component={ About }/>
          <Route exact path="/"><Home /></Route>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ol>
        </BrowserRouter>
    );
  }
}

export default App;
