import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './components/Slider'
import Slide from './components/Slide'

class App extends Component {
  render() {
    return (
      <div>
        <Slider />
      </div>
    );
  }
}

export default App;
