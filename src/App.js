import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Nav/>
      {routes}
      </div>
    );
  }
}

export default App;
