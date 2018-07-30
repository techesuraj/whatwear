import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Shirts from './components/Shirts';
import './sass/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Navigation/>
         <Shirts/>
        </header>
      </div>
    );
  }
}

export default App;
