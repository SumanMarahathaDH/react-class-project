import React from 'react'
import { Navigate } from 'react-router-dom'
import { getItem } from '../Utils/config/storageConfig'

const ProtectedRoute = ({children}) => {
    const isAuthenticated = Boolean(getItem("isAuthenticated"))
    const userDetails = JSON.parse(getItem("userDetails"))

    if(!isAuthenticated && !userDetails){
        return (
            <Navigate to="/" replace={true} state={{ from: location.pathname }} /> 
        )
    }
    else return children
}

export default ProtectedRoute