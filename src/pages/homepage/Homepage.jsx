import React from 'react'
import InfoBlocks from '../../components/InfoBlocks/InfoBlocks'
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions'
import { useGetHbarInfoQuery } from '../../redux/hbarApi'
import Loader from '../../components/loader/Loader'
import { useGetSupplyQuery, useGetTransactionsQuery } from '../../redux/hederaApi'

const Homepage = () => {
    const {data = [], isLoading: hbarLoading} = useGetHbarInfoQuery({},{
        pollingInterval: 20000,
    })

    const {data: trans, isLoading: transLoading} = useGetTransactionsQuery({}, {
        pollingInterval: 20000,
    })

    const {data: supply, isLoading: supplyLoading} = useGetSupplyQuery({})

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