import React from 'react'
import './RecentTransactions.css'
import Transaction from './Transaction';

const RecentTransactions = ({trans}) => {
    const transactions = trans.map((elem) => 
        <Transaction key={elem.transaction_hash} 
            id = {elem.transaction_id} 
            type = {elem.name} 
            // time = {elem.consensus_timestamp}
            result = {elem.result}
            fee = {elem.charged_tx_fee}
        />
    )
  return (
    <>
        <h4 className='info_title'>Recent Transactions</h4>
        <div className='recent_transactions page'>
        <table className="table table-borderless table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Type</th>
                <th scope="col">Result</th>
                <th scope='col'>Fee (Hbar)</th>
                </tr>
            </thead>
            <tbody>
                {transactions}
            </tbody>
            </table>
        </div>
    </>
  )
}

export default RecentTransactions