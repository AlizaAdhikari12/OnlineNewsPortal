import React from 'react'
import Logo from './Components/logo';
import Navbar from './Components/NavBar';
import { Outlet } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';

const Layout = () => {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
