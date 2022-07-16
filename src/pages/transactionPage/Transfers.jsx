import React from 'react'
import {NavLink} from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'

const Transfers = ({transfers, node, operator}) => {
    let p_trans = []
    let n_trans = []
    let collector = '0.0.98'

    transfers.forEach(elem => {
        if(elem.amount < 0) {n_trans.push(elem)}
        else {p_trans.push(elem)}
    });

  return (
    <div className='row'>
        <div className="col-auto">
            {n_trans.map((elem) => 
                <div key={elem.account}> 
                    <span className='link'><NavLink to={`/account/${elem.account}`}>{elem.account} </NavLink></span>
                    Amount: <span className='n_price'>{elem.amount / Math.pow(10, 8)}<span className='hbar'> &#8463; </span> </span>
                    {elem.account === operator ? <span>(Operator)</span> : ''}
                </div>)}
        </div>
        <div className="col-auto"><ArrowRightOutlined /></div>
        <div className="col-auto">
            {p_trans.map((elem) => 
                <div key={elem.account}> 
                    <span className='link'><NavLink to={`/account/${elem.account}`}>{elem.account} </NavLink></span>
                    Amount: <span className='p_price'>{elem.amount / Math.pow(10, 8)}<span className='hbar'> &#8463; </span> </span>
                    {elem.account === node ? <span>(Node)</span> : ''} {elem.account === collector ? <span>(Fee Collection)</span> : ''}
                </div>)}
        </div>
    </div>
  )
}

export default Transfers