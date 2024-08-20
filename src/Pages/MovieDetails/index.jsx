import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addToFavourite, getMovieDetails, getMyFavourite } from './service'

const MovieDetails = () => {
  const {id} = useParams()
  const [favouriteList, setFavouriteList] = useState([])
    const [movieDetails, setMovieDetails] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)
    const [isChangedFavourite, setIsChangedFavourite] = useState(false)
    const hasScreenMounted = useRef(false)

    const navigate = useNavigate();

    const getDetails = async () => {
        const details = await getMovieDetails(id)
        setMovieDetails(details)
    }

    useEffect(() => {
        getDetails()
    },[])

    useEffect(() => {
     const isAlreaady = favouriteList.every(item => item.id === Number(id))
     if(Boolean(isAlreaady) === false){
        addToFavouriteHandler()
  }
    },[isFavourite])

    useEffect(() => {
     getMyfavouriteList()
    },[isChangedFavourite])

    const backgroundImageLink = "https://image.tmdb.org/t/p/original/" + movieDetails?.backdrop_path

    const addToFavouriteHandler = async () => {
      const reqData = {
        media_id: id,
        media_type: "movie",
        favorite: isFavourite
      }
     await addToFavourite(reqData)
     setIsChangedFavourite((prevState) => !prevState)
    }

    const getMyfavouriteList = async () => {
      const response = await getMyFavourite()
      const isAlreadyExists = await response.results.some(item => item.id == id)      
      if(isAlreadyExists){
        setIsFavourite(true)
      }
      setFavouriteList(response.results)
    }

  return (
<div className='m-2'>
  <div className="p-5 text-center bg-image rounded-3 movieDetailContainer" 
  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageLink})`}}>
  <div className="bg-text">
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
            <i className={`bi bi-star${isFavourite ? "-fill" : ""} ms-4 fs-2`}
             onClick={() => setIsFavourite((prevState) => !prevState)} 
             style={{cursor: 'pointer', color: isFavourite? 'yellow' : ''}}></i>
            <br />
            <button type="button" onClick={() => navigate(-1)}
             className="btn btn-outline-secondary my-3"
              style={{fontSize: '0.8rem'}}><i className="bi bi-arrow-left"></i> Go Home</button>
        </div>
        <div className='col-6'>
            <h6>My favourites</h6>
            <div className="accordion mt-3" id="accordionExample">
            {favouriteList?.map((item) => (
            <div className="accordion-item" key={item?.id} style={{maxHeight: '13vh'}}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} className="favoriteImage" />
                <span style={{margin: "0 auto", fontSize: '0.95rem'}}>{item?.original_title}</span>
            </button>
            </h2>
           <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{fontSize: '0.75rem'}}>
              {item?.overview}
            </div>
            </div>
            </div>
            ))
}

            </div>
        </div>

    </div>
</div>
  )
}

export default MovieDetails