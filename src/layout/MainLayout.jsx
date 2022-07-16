import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer/Footer'

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
            <Footer />
        </footer>
    </>
  )
}

export default MainLayout