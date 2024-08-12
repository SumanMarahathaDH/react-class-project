import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error404Page from '../Components/Error/Error404Page'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'
import MovieDetails from '../Pages/MovieDetails'
import OpenRoute from './OpenRoute'
import ProtectedRoute from './ProtectedRoute'

const MainRoutes = () => {
  return (
    <div style={{minHeight: '100vh', minWidth: '100vw'}}>
    <Routes>
      <Route element={<OpenRoute />} >
        <Route path='' element={<Authentication />} />
      </Route>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/movie/:id" element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} />
        <Route path='*' element={<Error404Page />} />
    </Routes>
    </div>
  )
}

export default MainRoutes