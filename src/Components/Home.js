import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-3 " style={{backgroundColor:"#bdd0afff",marginTop:"10px"}}>
        <h2 className="text-center mb-4">Welcome to Asha's NewsApp 📰</h2>
        <p className="lead">
          This is a simple React-based news application where you can read the latest
          top headlines across different categories and stay updated with what's happening
          around the world. 
        </p>
        <p>
          Our app fetches live news articles using the <b>News API</b> and presents them in a clean, 
          card-style format. You can explore business, technology, health, sports, 
          entertainment, and much more.
        </p>
        <p>
          With features like infinite scrolling, you can keep reading news without 
          reloading the page. The app is designed to be fast, user-friendly, and 
          responsive across devices.
        </p>
        <p>
          🚀 Start exploring by clicking on the <b>News</b> section in the navigation bar above.
        </p>
      </div>
    )
  }
}
