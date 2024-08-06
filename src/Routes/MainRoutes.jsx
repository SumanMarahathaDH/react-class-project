import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error404Page from '../Components/Error/Error404Page'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Authentication />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error404Page />} />
    </Routes>
  )
}

export default MainRoutes