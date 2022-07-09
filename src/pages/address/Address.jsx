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
            {/* {!error ? 'Please Enter Your Address And Choose a Network'
                : 'An error has occurred! Please check that the entered address is correct.'
            } */}
            Please enter address
        </div>
    </div>
  )
}

export default Address