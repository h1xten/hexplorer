import React from 'react'
import {useParams} from 'react-router-dom'

const TransactionPage = () => {
    const {id} = useParams()
  return (
    <div>TransactionPage {id}</div>
  )
}

export default TransactionPage