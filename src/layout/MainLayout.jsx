import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
    </>
  )
}

export default MainLayout