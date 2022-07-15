import { GithubOutlined } from '@ant-design/icons/lib/icons'
import hedera_icon from '../../icons/hedera.svg'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__content wrapper">
            <div className='hedera'>
                <span className='hedera_text'>BUILT ON HEDERA</span>
                <a className='hedera' href="https://hedera.com/"><img width='22px' src={hedera_icon} alt="Hedera" /></a>
            </div>
            <div className='developer'>
                <span>Developed by h1xten </span>
                <a className='developer' href="https://github.com/h1xten/hexplorer" rel='noreferrer' target='_blank'><GithubOutlined style={{fontSize: 19}} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer