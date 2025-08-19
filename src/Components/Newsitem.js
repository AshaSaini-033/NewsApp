import React, { Component } from 'react'


export class Newsitem extends Component {
    constructor()
    {
        super();
        console.log("Hello i am a constructur")
    }
  render() {
   let {title,discription,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='container my-3 mx-2' >
       <div className="card" style={{ width: "20rem", height: "100%", minHeight: "420px" }}>
  <img src={!imageUrl?"https://www.mundodeportivo.com/files/og_thumbnail/files/fp/uploads/2025/01/07/677d0479967c1.r_d.1965-1328-3094.jpeg":imageUrl} className="card-img-top" alt="..."
    style={{ height: "200px", objectFit: "cover" }}/>
  <div className="card-body">
    <h5 className="card-title">{title}<span class="badge text-bg-info">{source}</span></h5>
    <p className="card-text"> {discription}</p>
    <p>By{author}   On{date}</p>
    <a href={newsUrl} target="_blank" className='btn btn-sm btn-primary'>Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
