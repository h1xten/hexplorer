import React from 'react'
import InfoBlocks from '../../components/InfoBlocks/InfoBlocks'
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions'
import { useGetHbarInfoQuery } from '../../redux/hbarApi'
import Loader from '../../components/loader/Loader'

const Homepage = () => {
    const {data = [], isLoading: hbarLoading} = useGetHbarInfoQuery({},{
        pollingInterval: 20000,
    })

    if(hbarLoading) return <Loader/>
  return (
    <div className="homepage">
        <div className="wrapper">
            <InfoBlocks data={data}/>
            <RecentTransactions />
        </div>
    </div>
  )
}

export default Homepage