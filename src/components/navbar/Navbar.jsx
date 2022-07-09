import React from 'react'
import {NavLink} from 'react-router-dom'
import { Switch } from 'antd'
import {useTheme} from '../../hooks/use-theme'
import './Navbar.css'
import SearchBox from '../SearchBox/SearchBox'
import NavList from './NavList'

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    const changeTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light')
    }

  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'>Hexplorer</NavLink></div>
            <NavList />
            <SearchBox />
        </div>
        <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/>
    </nav>
  )
}

export default Navbar