import React from 'react'
import {Navigate} from 'react-router-dom'

const Address = () => {
    const address = true

    if(address){
        return <Navigate to = '/' />
    }

  return (
    <div className='address'>
        <div className="address__content wrapper">
            Please enter address
        </div>
    </div>
  )
}

export default Address