import React from 'react'
import {Routes,Route} from "react-router-dom";
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
const MainRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
