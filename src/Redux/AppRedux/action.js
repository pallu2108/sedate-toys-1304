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
  return axios.get("https://trip-advisor.onrender.com/restaurants",params)
    .then((r) => {
      console.log("r", r)
      dispatch(restaurantSuccess(r.data));
    })
    .catch((e) => {
      dispatch(restaurantFailure());
    })
}





// -------------------------------------------------------------------------------
export const sightRequest = () => {
  return { type: types.SIGHT_REQUEST };
};

export const addToBasketSuccess = (payload) => {
  return {
    type: types.ADD_TO_BASKET_SUCCESS,
    payload,
  };
};

export const addToBasketFailure = () => {
  return {
    type: types.ADD_TO_BASKET_FAILURE,
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


export const getRestuarant = (dispatch) => {
  dispatch(restaurantRequest());
  return axios
    .get("http://localhost:8080/restaurants")
    .then((res) => {
      dispatch(restaurantSuccess(res.data));
    })
    .catch((err) => dispatch(restaurantFailure()));
};

export const getSight = (dispatch) => {
  dispatch(sightRequest());
  return axios
    // .get("http://localhost:8080/basket")
    .get("https://trip-advisor.onrender.com/hotels")
    .then((res) => {
      console.log("res:", res.data);
      return dispatch(addToBasketSuccess(res.data));
    })
    .catch((e) => {
      dispatch(addToBasketFailure(e));
    });
};



export const removeFromBasket = (id) => (dispatch) => {
  dispatch(removeFromBasketRequest());
  return axios
    .delete(`http://localhost:8080/sight/${id}`)
    .then((res) => {
      return dispatch(removeFromBasketSuccess());
    })
    .catch((e) => {
      dispatch(removeFromBasketFailure(e));
    });
};


export const POST_CART =(id,payload) =>(dispatch)=>{
  dispatch({type:types.CART_ITEMS_LOADING})
 return axios.patch(`http://localhost:8080/basket/${id}`,payload)
  .then((r)=> ({type:types.CART_ITEMS_SUCESS,payload:r.data}))
  .catch((e)=>({type:types.CART_ITEMS_FAILURE,e}))
}