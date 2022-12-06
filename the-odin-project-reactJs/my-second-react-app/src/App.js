import React, { Component } from 'react'
import './App.css';
import './appStyles.css'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';



class App extends Component{
  render () {
    return (
      <div className="App">
        <ClickCounter name={"Vishwas"}></ClickCounter>
        <HoverCounter></HoverCounter>
      </div>
    );
  }
}

export default App;
