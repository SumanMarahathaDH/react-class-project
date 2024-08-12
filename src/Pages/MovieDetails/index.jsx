import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from './service'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {id} = useParams()

    const getDetails = async () => {
        const details = await getMovieDetails(id)
        setMovieDetails(details)
    }

    useEffect(() => {
        getDetails()
    },[])

    console.log(movieDetails, '<><><><<><>')

  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails