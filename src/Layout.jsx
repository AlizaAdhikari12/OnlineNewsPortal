import React from 'react'
import Logo from './Components/logo'
import Navbar from './Components/Layout/Navbar/NavBar';
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <Outlet/>
     <Footer/>
    </div>
  )
}

export default Layout
