import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid p-3" style={{backgroundColor:"#96efacff",marginTop:"10px"}}>
        <h2>About This App</h2>
        <p>
          Welcome to <strong>NewsApp</strong>, a simple React-based application that delivers the latest headlines from around the world.
        </p>
        <p>
          This app fetches live data using the <strong>News API</strong> and displays top stories with details such as the title, description, author, and publication date.
        </p>
        <p>
          You can browse through different articles seamlessly thanks to the infinite scrolling feature, and each article comes with a direct link to the original source.
        </p>
        <p>
          The project is built using <strong>React, Bootstrap, and JavaScript</strong> to ensure a clean design, responsiveness, and smooth user experience.
        </p>
        <p>
          The purpose of this app is to provide a simple, user-friendly way to stay updated with breaking news, while also showcasing the use of React components, props, and state management.
        </p>
        <p>
          Future updates may include category filters, search functionality, and dark mode support.
        </p>
      </div>
    )
  }
}
