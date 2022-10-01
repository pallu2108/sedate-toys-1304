import React from 'react'
import {Routes,Route} from "react-router-dom";
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Alert from '../Pages/Alert';
import { Cart } from '../Pages/Cart/Cart';

import Home from '../Pages/Home';
import { HotelSearch } from '../Pages/HotelSearch';
import { Restaurants } from '../Pages/Resturants';
import Review from '../Pages/Review';
import Trips from '../Pages/Trips';
const MainRoutes = () => {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/alert" element={<Alert/>}/>
        <Route path="/resturants-search" element={<Restaurants/>}/>
        <Route path="/hotels-search" element={<HotelSearch/>}/>
        <Route path="/holidays-homes-search" element={<HotelSearch/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
