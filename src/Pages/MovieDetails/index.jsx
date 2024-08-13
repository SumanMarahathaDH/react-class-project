import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addToFavourite, getMovieDetails } from './service'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)
    const {id} = useParams()

    const navigate = useNavigate();

    const getDetails = async () => {
        const details = await getMovieDetails(id)
        setMovieDetails(details)
    }

    useEffect(() => {
        getDetails()
    },[])

    useEffect(() => {
      addToFavouriteHandler()
    },[isFavourite])

    const backgroundImageLink = "https://image.tmdb.org/t/p/original/" + movieDetails?.backdrop_path

    const addToFavouriteHandler = async () => {
      const reqData = {
        media_id: id,
        media_type: "movie",
        favorite: isFavourite
      }
      const response = await addToFavourite(reqData)
      console.log(response)
    }

  return (
<div className='m-2'>
  <div className="p-5 text-center bg-image rounded-3 movieDetailContainer" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageLink})`}}>
  <div class="bg-text">
    <h1>{movieDetails?.original_title}</h1>
    <p className='mt-3'>{movieDetails?.overview}</p>
  </div>
  </div>
    <div className='row movieDetailFavourite justify-content-evenly mt-3'>
        <div className='col-4'>
            <h6>Genres</h6>
            {
              movieDetails?.genres?.map((item) => (
                <span className='badge text-bg-secondary me-2 mt-2' key={item?.id}>{item?.name}</span>
              ))
            }
            <i className={`bi bi-star${isFavourite ? "-fill" : ""} ms-4 fs-2`} onClick={() => setIsFavourite((prevState) => !prevState)} style={{cursor: 'pointer', color: isFavourite? 'yellow' : ''}}></i>
            <br />
            <button type="button" onClick={() => navigate(-1)} className="btn btn-outline-secondary my-3" style={{fontSize: '0.8rem'}}><i className="bi bi-arrow-left"></i> Go Home</button>
        </div>
        <div className='col-6'>
            <h6>My favourites</h6>
        </div>

    </div>
</div>
  )
}

export default MovieDetails