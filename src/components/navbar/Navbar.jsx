import React from 'react'
import {NavLink} from 'react-router-dom'
import { Switch } from 'antd'
import {useTheme} from '../../hooks/use-theme'
import './Navbar.css'

const Navbar = () => {
    // const {theme, setTheme} = useTheme()
    // const changeTheme = () => {
    //     setTheme(theme === 'light'? 'dark' : 'light')
    // }

  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'> <span className='hbar'>H</span>explorer</NavLink></div>
            {/* <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/> */}
        </div>
    </nav>
  )
}

export default Navbar