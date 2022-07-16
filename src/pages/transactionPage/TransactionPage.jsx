import React from 'react'
import './TransactionPage.css'
import {useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { useGetTransactionQuery } from '../../redux/hederaApi'
import getTime from '../../utils/GetTime'
import Transfers from './Transfers'
import InfoRow from '../../components/InfoRow/InfoRow'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'
import { useSelector } from 'react-redux'
import getDynamicQuery from '../../utils/getDynamicQuery'

const TransactionPage = () => {
    const state_net = useSelector(state => state.net.net)
    const net = getDynamicQuery(state_net)
    const {id} = useParams()
    const {data, isLoading, isError, error} = useGetTransactionQuery({net, id})
    if(isLoading) return <Loader />
    else if(isError) return <ErrorBlock title = {error.status} value = {error.data._status.messages[0].message.split('.')[0]} />
    const dur = data.valid_duration_seconds >= 60 ? data.valid_duration_seconds / 60 + ' min' : data.valid_duration_seconds + ' sec'
 
  return (
    <div className='transaction_page wrapper'>
        <h4 className='info_title'>TRANSACTION</h4>
        <div className='transction_page__content page'>
            <InfoRow title= 'ID:' value={data.transaction_id} />
            <InfoRow title= 'Hash:' value={data.transaction_hash} />
            <InfoRow title= 'Type:' value={data.name} />
            <InfoRow title= 'Consensus At:' value={getTime(data.consensus_timestamp)} />
            <InfoRow title= 'Duration:' value={dur} />
            <InfoRow title= 'Status:' value={data.result} />
            <InfoRow title= 'Node Account:' value={<div className='link'> <NavLink to={`/account/${data.node}`}>{data.node}</NavLink></div>} />
            <InfoRow title= 'Operator Account:' value={<div className='link'> <NavLink to={`/account/${id.split('-')[0]}`}>{id.split('-')[0]}</NavLink></div>} />
            <InfoRow title= 'Fee:' value={<div>{data.charged_tx_fee / Math.pow(10, 8)} <span className='hbar'> &#8463; </span></div>} />
            <InfoRow title= 'Max Fee:' value={<div>{data.max_fee / Math.pow(10, 8)} <span className='hbar'> &#8463; </span></div>} />
            <h5>TRANSFERS</h5>
            <Transfers transfers = {data.transfers} node = {data.node} operator = {id.split('-')[0]} />
        </div>
    </div>
  )
}

export default TransactionPage