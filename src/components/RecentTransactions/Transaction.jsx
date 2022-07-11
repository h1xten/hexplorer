import React from 'react'
import {NavLink} from 'react-router-dom'

const Transaction = ({id, type, result, fee}) => {
  return (
        <tr>
            <td className='transaction_link'> <NavLink to = {`transaction/${id}`}>{id.substring(0, 12) + "..."}</NavLink></td>
            <td>{type}</td>
            <td>{result}</td>
            <td>{fee/Math.pow(10,8)}</td>
        </tr>
  )
}

export default Transaction