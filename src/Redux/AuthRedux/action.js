import { useToast } from "@chakra-ui/react";
import axios from "axios";
import * as types from "./actionType"

// export const login = (payload) => dispatch => {
//     dispatch({ type: types.USER_LOGIN_REQUEST });
//     return axios.post("https://reqres.in/api/login", payload)
//         .then(r => {
//             return dispatch({ type: types.USER_LOGIN_SUCCESS, });
//         }).catch((e) => {
//             dispatch({ type: types.USER_LOGIN_FAILURE, payload: e })
//         });
// }


// let userDataLogin = JSON.parse(localStorage.getItem("userData")) || [];

// export const signIn = (params) = (dispatch) => {
//     const toast = useToast();
//     // console.log(isAuth, "isAuth")
//     // let data = {
//     //     email: user.email,
//     //     password: user.password,
//     //     isAuth: true
//     // }
//     console.log(params, "data params")
//     dispatch({ type: types.USER_LOGIN_REQUEST });
//     if (checklogin(params.email, params.password) === true) {
//         localStorage.setItem("login", JSON.stringify(data));
//         toast({
//             title: 'Yes....',
//             description: "You are Successfully Logged In.",
//             status: 'success',
//             duration: 3000,
//             position: 'top',
//             isClosable: true,
//         })
//         navigate("/");
//         return dispatch({ type: types.USER_LOGIN_SUCCESS, });
//         // let x = user.email.slice(0, 11)
//         // toggleUser()
//     } else {
//         toast({
//             title: 'Wrong Credentials....',
//             description: "Please check your Email ID and Password.",
//             status: 'error',
//             duration: 3000,
//             position: 'top',
//             isClosable: true,
//         })
//         dispatch({ type: types.USER_LOGIN_FAILURE, payload: e })
//     }
// }
// // console.log(userData, "userData")

// function checklogin(email, password) {
//     let filter = userDataLogin.filter(function (elem) {
//         console.log(elem, "elem")
//         localStorage.setItem("CurrentUser", JSON.stringify(elem))
//         return elem.email === email && elem.password === password;
//     })

//     if (filter.length > 0) {
//         return true;
//     } else {
//         console.log("working")
//         return false;
//     }
// }