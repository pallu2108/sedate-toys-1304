import React from 'react'
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from '../Auth/PrivateRoutes';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import SignIn from '../Components/SignIn';
import Alert from '../Pages/Alert';
import { Cart } from '../Pages/Cart/Cart';

import Home from '../Pages/Home';
import Hotel from '../Pages/Hotel/Hotel';
import { PaymentDetails } from '../Pages/Payment/PaymentDetails';
import { TravelDetails } from '../Pages/Payment/TravellerDetails';
import PlaceDetails from '../Pages/PlaceDetails';
import Restaurant from '../Pages/Restaurant/Restaurant';
import Review from '../Pages/Review';
import Trips from '../Pages/Trips';
const MainRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/:id" element={<PlaceDetails />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/travellerdetails" element={<TravelDetails />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default MainRoutes
