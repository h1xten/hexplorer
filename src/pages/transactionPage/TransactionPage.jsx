import React from 'react'
import './TransactionPage.css'
import {useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useGetTransactionQuery } from '../../redux/hederaApi'
import getTime from '../../utils/GetTime'
import Transfers from './Transfers'

const TransactionPage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetTransactionQuery(id)
    if(isLoading) return <Loader />
 
  return (
    <div className='transaction_page wrapper'>
        <h4 className='info_title'>TRANSACTION</h4>
        <div className='transction_page__content page'>
            <div className='row'>
                <div className="col-3">
                    <div>ID:</div>
                    <div>Hash:</div>
                    <div>Type:</div>
                    <div>Consensus At:</div>
                    <div>Duration:</div>
                    <div>Status:</div>
                    <div>Node Account:</div>
                    <div>Operator Account:</div>
                    <div>Fee:</div>
                    <div>Max Fee:</div>
                </div>
                <div className='col'>
                    <div>{data.transaction_id}</div>
                    <div>{data.transaction_hash}</div>
                    <div>{data.name}</div>
                    <div>{getTime(data.consensus_timestamp)}</div>
                    <div>{data.valid_duration_seconds/60}</div>
                    <div>{data.result}</div>
                    <div className='link'> <NavLink to={`/account/${data.node}`}>{data.node}</NavLink></div>
                    <div className='link'> <NavLink to={`/account/${id.split('-')[0]}`}>{id.split('-')[0]}</NavLink></div>
                    <div>{data.charged_tx_fee / Math.pow(10, 8)} Hbar</div>
                    <div>{data.max_fee / Math.pow(10, 8)} Hbar</div>
                </div>
            </div>
            <h5>TRANSFERS</h5>
            <Transfers transfers = {data.transfers} node = {data.node} operator = {id.split('-')[0]} />
        </div>
    </div>
  )
}

export default TransactionPage