import React from 'react'
import {useParams} from 'react-router-dom'
import InfoRow from '../../components/InfoRow/InfoRow'
import Loader from '../../components/loader/Loader'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'
import { useGetAccountQuery } from '../../redux/hederaApi'
import { useSelector } from 'react-redux'
import { MAINNET_API_URL, TESTNET_API_URL } from '../../config'
import TokenList from '../../components/TokensList/TokenList'

const AccountPage = () => {
    const chooseNet = useSelector(state => state.net.net)
    const net = chooseNet === 'mainnet' ? MAINNET_API_URL : TESTNET_API_URL
    const {acc} = useParams()
    const {data, isLoading, isError, error} = useGetAccountQuery({net, acc})
    if(isLoading) return <Loader />
    else if(isError) return <ErrorBlock title = {error.status} value = {error.data._status.messages[0].message} />

  return (
    <div className='account_page wrapper'>
        <h4 className='info_title'>ACCOUNT</h4>
        <div className='content page'>
            <InfoRow title='Account ID:' value={data?.account ? data.account : 'None'} />
            <InfoRow title='Balance:' value={<div>{(data?.balance?.balance >= 0 ? data.balance.balance / Math.pow(10, 8) : 'None')} <span className='hbar'> &#8463; </span></div>} />
            <InfoRow title='Tokens:' value = { (data.balance.tokens).length > 0 ? <TokenList tokens = {data.balance.tokens} /> : 'None'} />
            <InfoRow title={`Key (${data?.key?._type ? data.key._type : 'None'}):`} value = {data?.key?.key ? data.key.key : 'None'} />
            <InfoRow title='Alias:' value={data?.alias ? data.alias : 'None'} />
            <InfoRow title='EVM Address:' value={data?.evm_address ? data.evm_address : 'None'} />
        </div>
    </div>
  )
}

export default AccountPage