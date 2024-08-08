import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error404Page from '../Components/Error/Error404Page'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'

const MainRoutes = () => {
  return (
    <div style={{minHeight: '100vh', minWidth: '100vw'}}>
    <Routes>
        <Route path='' element={<Authentication />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error404Page />} />
    </Routes>
    </div>
  )
}

export default MainRoutes