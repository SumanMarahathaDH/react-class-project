import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../Components/Common/Card'
import { getPopularMovies } from '../Dashboard/services'

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])

    const getData = async () => {
      const popularMoviesData = await getPopularMovies()
      setPopularMovies(popularMoviesData.results)
    }
  
    useEffect(() => {
      getData()
    }, [])

  return (
    <div className="mt-4">
        <p className='mx-auto text-center' style={{fontSize: '1.25rem', margin: '0 auto'}}>Popular Movies</p>
            <div className='popularMoviesList'>
                {popularMovies?.map((item) => (
                    <Card key={item?.id} item={item} />
                ))}
            </div>
    </div>
  )
}

export default PopularMovies