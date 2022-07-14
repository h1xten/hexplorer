import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, notification } from 'antd'
import { InfoOutlined } from '@ant-design/icons'
import './Navbar.css'

const Navbar = () => {

    const openNotification = () => {
        const args = {
            message: 'Beta',
            description: 'The site is in beta testing. If you find any bugs please report to the developer.',
            duration: 6,
        }
        notification.open(args)
    }

  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'> <span className='hbar'>H</span>explorer</NavLink></div>
            <div className='beta'><Button type='primary' danger = {true} ghost = {true} size='small' shape='circle' onClick={openNotification} icon = {<InfoOutlined style={{ fontSize: '16px'}} />}></Button></div>
            {/* <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/> */}
        </div>
    </nav>
  )
}

export default Navbar