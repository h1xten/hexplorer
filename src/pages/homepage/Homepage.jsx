import React from 'react'
import InfoBlocks from '../../components/InfoBlocks/InfoBlocks'
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions'
import { useGetHbarInfoQuery } from '../../redux/hbarApi'
import Loader from '../../components/Loader/Loader'
import { useGetSupplyQuery, useGetTransactionsQuery } from '../../redux/hederaApi'
import getDynamicQuery from '../../utils/getDynamicQuery'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const state_net = useSelector(state => state.net.net)
    const net = getDynamicQuery(state_net)
    const {data = [], isLoading: hbarLoading} = useGetHbarInfoQuery(undefined,{
        pollingInterval: 20000,
    })

    const {data: trans, isLoading: transLoading} = useGetTransactionsQuery(net, {
        pollingInterval: 20000,
    })

    const {data: supply, isLoading: supplyLoading} = useGetSupplyQuery(net)

    if(hbarLoading || transLoading || supplyLoading) return <Loader/>

  return (
    <div className="homepage">
        <div className="wrapper">
            <InfoBlocks data={data} supply = {supply}/>
            <RecentTransactions trans = {trans} />
        </div>
    </div>
  )
}

export default Homepage