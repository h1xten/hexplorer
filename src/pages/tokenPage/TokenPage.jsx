import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetTokenQuery } from '../../redux/hederaApi'
import Loader from '../../components/loader/Loader'
import getTime from '../../utils/GetTime'

const TokenPage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetTokenQuery(id)
    if(isLoading) return <Loader />
    console.log(data)
  return (
    <div className='token_page wrapper'>
        <h4 className='info_title'>Token <span> {data.symbol} </span></h4>
        <div className='content page'>
            <div className="row">
                <div className="col-3">
                    <div>Name:</div>
                    <div>Symbol:</div>
                    <div>Type:</div>
                    <div>Token ID:</div>
                    <div>Total Supply:</div>
                    <div>Initial Supply:</div>
                    <div>Supply Type:</div>
                    <div>Created At:</div>
                    <div>Modified At:</div>
                </div>
                <div className="col">
                    <div>{data.name ? data.name : 'None'}</div>
                    <div>{data.symbol ? data.symbol : 'None'}</div>
                    <div>{data.type ? data.type : 'None'}</div>
                    <div>{data.token_id ? data.token_id : 'None'}</div>
                    <div>{data.total_supply ? data.total_supply : 'None'}</div>
                    <div>{data.initial_supply ? data.initial_supply : 'None'}</div>
                    <div>{data.supply_type ? data.supply_type : 'None'}</div>
                    <div>{data.created_timestamp ? getTime(data.created_timestamp) : 'None'}</div>
                    <div>{data.modified_timestamp ? getTime(data.modified_timestamp) : 'None'}</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TokenPage