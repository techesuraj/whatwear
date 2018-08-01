import React, { Component } from 'react';
import Navigation from './Navigation';
import Shirt from './Shirt';
import '../sass/App.css';
import sampleShirts from '../sample-shirts';

class App extends Component {
  state ={
    shirts:{}
  }
  loadSampleShirts = () => {
   this.setState({
     shirts:sampleShirts
   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Navigation loadSamples = {this.loadSampleShirts}/>
            <ul className="shirts-list">
              {Object.keys(this.state.shirts).map(key => <Shirt key={key} details={this.state.shirts[key]}/>)}
            </ul>
        </header>
      </div>
    );
  }
}

export default App;
