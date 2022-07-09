import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAccountBalance } from '../../store/addressSlice'

const Homepage = () => {
    const account = '0.0.1048247'
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAccountBalance({account}))
    })

  return (
    <div>Homepage</div>
  )
}

export default Homepage