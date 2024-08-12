import React from 'react'
import Navbar from '../../Components/Partials/Navbar'
import PopularMovies from '../PopularMovies'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <PopularMovies />
    </div>
  )
}

export default Dashboard