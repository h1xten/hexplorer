import React from 'react'
import { useGetTokenQuery } from '../../redux/hederaApi'

const Token = ({net, token, balance}) => {
    const {data, isLoading} = useGetTokenQuery({net, token})
  return (
    <div>{!isLoading ?
        <span>{data.name} {(balance / Math.pow(10, Number(data.decimals))).toFixed(4)}</span>
        :
        <span>Loading</span>
    }
    </div>
  )
}

export default Token