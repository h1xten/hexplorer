import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useGetAccountQuery } from '../../redux/hederaApi'

const AccountPage = () => {
    const {acc} = useParams()
    const {data, isLoading} = useGetAccountQuery(acc)
    if(isLoading) return <Loader />

  return (
    <div className='account_page wrapper'>
        <h4 className='info_title'>ACCOUNT</h4>
        <div className='content page'>
            <div className='row'>
                <div className="col-3">
                    <div>Account ID:</div>
                    <div>Balance:</div>
                    {/* <div>Tokens:</div> */}
                    <div>Key ({data.key._type ? data.key._type : 'None'}):</div>
                    <div>Alias:</div>
                    <div>EVM Address:</div>
                </div>
                <div className="col-auto">
                    <div>{data.account ? data.account : 'None'}</div>
                    <div>{data.balance.balance >= 0 ? data.balance.balance / Math.pow(10, 8) : 'None'} Hbar</div>
                    {/* <div>{data.balance.tokens.length > 0 ? data.balance.tokens : 'None'}</div> */}
                    <div>{data.key.key ? data.key.key : 'None'}</div>
                    <div>{data.alias ? data.alias : 'None'}</div>
                    <div>{data.evm_address ? data.evm_address : 'None'}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountPage