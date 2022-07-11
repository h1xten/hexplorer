import Search from 'antd/lib/input/Search'
import React from 'react'
import { numberWithCommas } from '../../utils/NumberWithCommas'
import { VolumeToText } from '../../utils/VolumeToText'
import './InfoBlocks.css'

const InfoBlocks = ({data, supply}) => {
  return (
    <>
        <h4 className='info_title'>Hedera Overview</h4>
        <div className="info_blocks">
            <div className="info_block col-3 page">
                <h5 className='block_title'>HBAR</h5>
                <div className="row">
                    <div className="col">
                        <div>Price:</div>
                        <div>24h Change:</div>
                        <div>24h Volume:</div>
                        <div>Market Cap:</div>
                    </div>
                    <div className="col">
                        <div>${data.usd.toFixed(4)}</div>
                        <div className= {data.usd_24h_change.toFixed(1) >= 0 ? 'p_price' : 'n_price'}>{data.usd_24h_change.toFixed(1)} %</div>
                        <div>{VolumeToText(data.usd_24h_vol.toFixed(0))}</div>
                        <div>{VolumeToText(data.usd_market_cap.toFixed(0))}</div>
                    </div>
                </div>
            </div>
            <div className="info_block col-3 page">
                <h5 className='block_title'>SUPPLY</h5>
                <div>
                    <div>Released Supply:</div>
                    <div className='supply_vol'>{numberWithCommas(((supply.released_supply)/Math.pow(10, 8)).toFixed(3))} <span className='hbar'>HBAR</span></div>
                    <div>Total Supply:</div>
                    <div className='supply_vol'>{numberWithCommas((supply.total_supply)/Math.pow(10, 8))} <span className='hbar'>HBAR</span></div>
                    </div>
            </div>
            <div className="info_block col page">
                <h5 className='block_title'>SEARCH</h5>
                <div>Account: <Search placeholder='Account ID or Alias or EVM' style={{width: 300}}/></div>
                <div>Transaction: <Search placeholder='Transaction id' style={{width: 300}}/></div>
            </div>
        </div>
    </>
  )
}

export default InfoBlocks