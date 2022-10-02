import * as types from "./actionType";
import axios from "axios";

export const hotelRequest = () => {
  return { type: types.HOTEL_REQUEST };
};

export const hotelSuccess = (payload) => {
  return { type: types.HOTEL_SUCCESS, payload };
};

export const hotelFailure = () => {
  return { type: types.HOTEL_FAILURE };
};

export const getHotelData = (params) => (dispatch) => {
  // console.log(params)
  dispatch(hotelRequest());
  return axios.get("https://trip-advisor.onrender.com/hotels", params)
    .then((r) => {
      // console.log("r", r.data)
      dispatch(hotelSuccess(r.data));
    })
    .catch((e) => {
      dispatch(hotelFailure());
    })
}

// ---------------------------------------------------------------------------

export const restaurantRequest = () => {
  return { type: types.RESTAURANTS_REQUEST };
};

export const restaurantSuccess = (payload) => {
  return { type: types.RESTAURANTS_SUCCESS, payload };
};

export const restaurantFailure = () => {
  return { type: types.RESTAURANTS_FAILURE };
};

export const getRestaurantData = (params) => (dispatch) => {
  // console.log(params)
  dispatch(restaurantRequest());
  return axios.get("https://trip-advisor.onrender.com/restaurants", params)
    .then((r) => {
      console.log("r", r)
      dispatch(restaurantSuccess(r.data));
    })
    .catch((e) => {
      dispatch(restaurantFailure());
    })
}





// -------------------------------------------------------------------------------

export const cartSuccess = (payload) => {
  return {
    type: types.CART_SUCCESS,
    payload,
  };
};

export const cartFailure = () => {
  return {
    type: types.CART_FAILURE,
  };
};
export const cartRequest = () => {
  return {
    type: types.CART_REQUEST,
  };
};







export const removeFromBasketRequest = () => {
  return {
    type: types.REMOVE_FROM_BASKET_REQUEST,
  };
};

export const removeFromBasketSuccess = (id) => {
  return {
    type: types.REMOVE_FROM_BASKET_SUCCESS,
    payload: id,
  };
};

export const removeFromBasketFailure = () => {
  return {
    type: types.REMOVE_FROM_BASKET_FAILURE,
  };
};

// export const getCartData = () => (dispatch) => {
//   dispatch(cartRequest());
//   return axios
//     .get("http://localhost:8080/basket")
//     .then((r) => {
//       console.log(r.data)
//       dispatch(cartSuccess(r.data));
//     })
//     .catch((e) => {
//       dispatch(cartFailure(e));
//     });
// };
export const getCartData = () => (dispatch) => {
  console.log("cart is getting called")
  dispatch(cartRequest());
  return axios
    .get("https://trip-advisor.onrender.com/basket")
    .then((r) => {
      console.log(r.data)
      dispatch(cartSuccess(r.data));
    })
    .catch((e) => {
      dispatch(cartFailure(e));
    });
};

// export const postCartData = (payload) => (dispatch) => {
//   dispatch(cartRequest());
//   return axios
//     .post("http://localhost:8080/basket", payload)
//     .then((r) => {
//       console.log(r)
//       dispatch(cartSuccess(r));
//     })
//     .catch((e) => {
//       dispatch(cartFailure(e));
//     });
// };
export const postCartData = (payload) => (dispatch) => {
  dispatch(cartRequest());
  // console.log(payload, "payload")
  return axios
    .post("https://trip-advisor.onrender.com/basket", payload)
    .then((r) => {
      console.log(r.data, "post successfull")
      dispatch(cartSuccess(r.data));
      dispatch(getCartData())
    })
    .catch((e) => {
      dispatch(cartFailure(e));
    });
};

export const removeFromBasket = (id) => (dispatch) => {
  console.log(id)
  dispatch(cartRequest());
  return axios
    .delete(`https://trip-advisor.onrender.com/basket/${id}`)
    .then((res) => {
      dispatch(getCartData());
    })
    .catch((e) => {
      dispatch(cartFailure(e));
    });
};

export const emptyBasket = (basket) => (dispatch) => {
  console.log(basket)
  dispatch(cartRequest());
  {
    basket.map((item) => {
      axios
        .delete(`https://trip-advisor.onrender.com/basket/${item.id}`)
        .then((res) => {
          dispatch(getCartData());
        })
        .catch((e) => {
          dispatch(cartFailure(e));
        });
    })
  }

};


// ----------------------------------------------------------------------------------


export const placesRequest = () => {
  return { type: types.PLACES_REQUEST };
};

export const placesSuccess = (payload) => {
  return { type: types.PLACES_SUCCESS, payload };
};

export const placesFailure = () => {
  return { type: types.PLACES_FAILURE };
};

export const getPlacesData = () => (dispatch) => {
  dispatch(placesRequest());
  return axios
    .get("https://trip-advisor.onrender.com/places")
    .then((r) => {
      console.log(r.data)
      dispatch(placesSuccess(r.data));
    })
    .catch((e) => {
      dispatch(placesFailure(e));
    });
};







// ----------------------------------------------------------------------------------


// export const getRestuarant = (dispatch) => {
//   dispatch(restaurantRequest());
//   return axios
//     .get("http://localhost:8080/restaurants")
//     .then((res) => {
//       dispatch(restaurantSuccess(res.data));
//     })
//     .catch((err) => dispatch(restaurantFailure()));
// };

// export const getSight = (dispatch) => {
//   dispatch(sightRequest());
//   return axios
//     // .get("http://localhost:8080/basket")
//     .get("https://trip-advisor.onrender.com/hotels")
//     .then((res) => {
//       console.log("res:", res.data);
//       return dispatch(addToBasketSuccess(res.data));
//     })
//     .catch((e) => {
//       dispatch(addToBasketFailure(e));
//     });
// };





export const POST_CART = (id, payload) => (dispatch) => {
  dispatch({ type: types.CART_ITEMS_LOADING })
  return axios.patch(`http://localhost:8080/basket/${id}`, payload)
    .then((r) => ({ type: types.CART_ITEMS_SUCESS, payload: r.data }))
    .catch((e) => ({ type: types.CART_ITEMS_FAILURE, e }))
}