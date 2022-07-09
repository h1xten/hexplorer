import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'

const RequireAddress = ({children}) => {
    const address = true

    const location = useLocation();

    if(!address){
        return <Navigate to='/address' state={{from: location}}/>
    }

  return children;
}

export default RequireAddress