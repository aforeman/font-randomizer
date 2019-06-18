import React from 'react';
import RandomizationEngine from './RandomizationEngine/RandomizationEngine.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serifFonts: [],
      sansSerifFonts: [],
      currentSerif: '',
      currentSansSerif: ''
    };
  }

  componentDidMount() {
    let fontRequest = new XMLHttpRequest();
    fontRequest.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDJLipwfXH53cWU02eI3r8VtRsVq42C-30", true);
    fontRequest.onload = function (e) {
      if (fontRequest.readyState === 4) {
        if (fontRequest.status === 200) {
          let fontList = JSON.parse(fontRequest.responseText);

          let serifFonts = this.state.serifFonts;
          let sansSerifFonts = this.state.sansSerifFonts;

          for(let l = 0; l < fontList.items.length; l++) {
            switch(fontList.items[l].category) {
              case 'serif':
                if(fontList.items[l].variants.indexOf('regular') > -1) {
                  serifFonts.push(fontList.items[l].files.regular);
                }
                break;
              case 'sans-serif':
                if(fontList.items[l].variants.indexOf('regular') > -1) {
                  sansSerifFonts.push(fontList.items[l].files.regular);
                }
                break;
              default:
                continue;
            }
          }

          this.setState({serifFonts: serifFonts, sansSerifFonts: sansSerifFonts});
        }
      }
    }.bind(this);
    fontRequest.send(null);
  }

  handleRandomizeClick(event) {
    if(this.state.serifFonts.length > 0) {
      this.setState({currentSerif:this.state.serifFonts[ Math.floor(Math.random() * Math.floor(this.state.serifFonts.length)) ]});
    }
    if(this.state.sansSerifFonts.length > 0) {
      this.setState({currentSansSerif:this.state.sansSerifFonts[ Math.floor(Math.random() * Math.floor(this.state.sansSerifFonts.length)) ]});
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="button" value="Randomize fonts!" onClick={this.handleRandomizeClick.bind(this)} />
        </div>
        <RandomizationEngine currentSerif={this.state.currentSerif} currentSansSerif={this.state.currentSansSerif} />
      </div>
    );
  }
}

export default App;
