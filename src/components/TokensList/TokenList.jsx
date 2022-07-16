import React from 'react'
import { Badge, Select } from 'antd'
import { useSelector } from 'react-redux'
import getDynamicQuery from '../../utils/getDynamicQuery'
import Token from './Token'

const TokenList = ({tokens}) => {
    const state_net = useSelector(state => state.net.net)
    const net = getDynamicQuery(state_net)
    const {Option} = Select

  return (
      <div className='tokens_list'>
          <Badge count = {tokens.length}>
            <Select placeholder = 'Tokens' style={{width: 200}}>
                {tokens.map(elem => <Option key={elem.token_id} value={elem.token_id}> <Token net = {net} token = {elem.token_id} balance = {elem.balance} /> </Option>)}
            </Select>
          </Badge>
    </div>
  )
}

export default TokenList