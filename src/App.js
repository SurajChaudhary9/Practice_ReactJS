import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/Greet'

class App extends Component {
  render(){
    return(
      <div className="App">
      <MyComponent/> 
      </div>//name change from greet to MyComponent to explain default export
    )
  }
} 
export default App;
