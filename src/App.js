
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
import About from './Components/About';

export default class App extends Component {
  i = "Asha saini";
  render() {
    return (
      <>
        <Navbar />
        <div className="container my-3">
          <News pageSize={3} />
        </div>
      </>
    )
  }
}
