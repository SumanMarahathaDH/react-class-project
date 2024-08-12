import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
<div className="card my-3" style={{width: "18rem", maxHeight: '65vh'}}>
  <img src={"https://image.tmdb.org/t/p/original/"+item?.poster_path} className="card-img-top" alt="..." style={{height: '60%'}} />
  <div className="card-body">
    <p className="card-title fs-5">{item?.original_title}</p>
    <p className="card-text" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item?.overview}</p>
    <Link to={`/movie/${item?.id}`} className="btn btn-primary">More Info</Link>
  </div>
</div>
  )
}

export default Card