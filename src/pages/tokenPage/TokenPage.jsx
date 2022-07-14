import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetTokenQuery } from '../../redux/hederaApi'
import Loader from '../../components/loader/Loader'
import getTime from '../../utils/GetTime'
import InfoRow from '../../components/InfoRow/InfoRow'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'

const TokenPage = () => {
    const {id} = useParams()
    const {data, isLoading, isError, error} = useGetTokenQuery(id)
    if(isLoading) return <Loader />
    else if(isError) return <ErrorBlock title = {error.status} value = {error.data._status.messages[0].message} />
    console.log(data)
  return (
    <div className='token_page wrapper'>
        <h4 className='info_title'>Token <span> {data.symbol} </span></h4>
        <div className='content page'>
            <InfoRow title='Name:' value={data.name ? data.name : 'None'} />
            <InfoRow title='Symbol:' value={data.symbol ? data.symbol : 'None'} />
            <InfoRow title='Type:' value={data.type ? data.type : 'None'} />
            <InfoRow title='Token ID:' value={data.token_id ? data.token_id : 'None'} />
            <InfoRow title='Total Supply:' value={data.total_supply ? data.total_supply : 'None'} />
            <InfoRow title='Initial Supply:' value={data.initial_supply ? data.initial_supply : 'None'} />
            <InfoRow title='Supply Type:' value={data.supply_type ? data.supply_type : 'None'} />
            <InfoRow title='Created At:' value={data.created_timestamp ? getTime(data.created_timestamp) : 'None'} />
            <InfoRow title='Modified At:' value={data.modified_timestamp ? getTime(data.modified_timestamp) : 'None'} />
        </div>

    </div>
  )
}

export default TokenPage