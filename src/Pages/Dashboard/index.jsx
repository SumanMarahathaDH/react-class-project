import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Partials/Navbar'
import { getPopularMovies } from './services'

const Dashboard = () => {

  const [popularMovies, setPopularMovies] = useState([])

  const getData = async () => {
    const popularMoviesData = await getPopularMovies()
    setPopularMovies(popularMoviesData.results)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Dashboard