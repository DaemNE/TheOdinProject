import React, { Component } from 'react'
import './App.css';
import './appStyles.css'
import ParentComp from './components/ParentComp';



class App extends Component{
  render () {
    return (
      <div className="App">
        <ParentComp></ParentComp>
      </div>
    );
  }
}

export default App;
