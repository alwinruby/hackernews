import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const hello = 'Lets get back to React';
    return (
      <div className="App">
        <h2>{hello}</h2>
      </div>
    );
  }
}

export default App;
