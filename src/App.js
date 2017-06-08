import React, { Component } from 'react';
import {Square, Board, Game} from 'Components';

// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Square/>
        <Board/>
        <Game/>
      </div>
    );
  }
}

export default App;
