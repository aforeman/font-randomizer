import React from 'react';
import RandomizationEngine from './RandomizationEngine/RandomizationEngine.js';
import './App.css';

class App extends React.Component {
  handleRandomizeClick(event) {
    console.log('handleRandomizeClick(');
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="button" value="Randomize fonts!" onClick={this.handleRandomizeClick.bind(this)} />
        </div>
        <RandomizationEngine />
      </div>
    );
  }
}

export default App;
