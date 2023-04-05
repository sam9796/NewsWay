import React from 'react'

function NewsItem(props) {
  return (
      <div className="card">
  <img src={props.urlToImage?props.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Zobc0u8gDhsFUkLRRMfYXdXZ7HDW242hhw&usqp=CAU"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.date).toGMTString()}</small></p>
    <a href={props.url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    
  )
}

export default NewsItem
