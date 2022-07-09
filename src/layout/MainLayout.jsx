import React from 'react'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <header>

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