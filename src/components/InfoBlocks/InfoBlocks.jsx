import React from 'react'
import './InfoBlocks.css'

const InfoBlocks = ({data}) => {
  return (
    <>
        <h4 className='info_title'>Hedera Overview</h4>
        <div className="info_blocks">
            <div className="info_block col page">
                <div>Hbar Price</div>
                <div>{data.usd}</div>
            </div>
            <div className="info_block col page">
                <div>Market Cap</div>
                <div>{data.usd_market_cap}</div>
            </div>
            <div className="info_block col page">
                <div>change24</div>
                <div>{data.usd_24h_change}</div>
            </div>
            <div className="info_block col page">4</div>
        </div>
    </>
  )
}

export default InfoBlocks