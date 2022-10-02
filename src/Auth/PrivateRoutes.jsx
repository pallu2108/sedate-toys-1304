import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    // const Auth = useSelector(state=> state.AuthReducer.isAuth)
    const location = useLocation();
    // console.log(Auth,"auth")
    // let data = JSON.parse(localStorage.getItem("login"));
    // const auth = data.isAuth || null
    // if (auth == null || auth == undefined) {
    //     return <Navigate to="/register" replace state={{ data: location.pathname }} />
    // }
    return children;
}

