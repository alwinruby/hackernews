import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let helloWorld = 'Now using let';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
