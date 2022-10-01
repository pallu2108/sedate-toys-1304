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

export const restaurantRequest = () => {
  return { type: types.RESTAURANTS_REQUEST };
};

export const restaurantSuccess = (payload) => {
  return { type: types.RESTAURANTS_SUCCESS, payload };
};

export const restaurantFailure = () => {
  return { type: types.RESTAURANTS_FAILURE };
};

export const sightRequest = () => {
  return { type: types.SIGHT_REQUEST };
};

export const sightSuccess = (payload) => {
  return { type: types.SIGHT_SUCCESS, payload };
};

export const sightFailure = () => {
  return { type: types.SIGHT_FAILURE };
};


export const addToBasketRequest = () => {
  return {
    type: types.ADD_TO_BASKET_REQUEST,
  };
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


export const getHotel = (dispatch) => {
  dispatch(hotelRequest());
  return axios
    .get("http://localhost:8080/hotels")
    .then((res) => {
      dispatch(hotelSuccess(res.data));
    })
    .catch((err) => dispatch(hotelFailure()));
};

export const placesRequest = () => {
  return { type: types.PLACES_REQUEST };
};

export const placesSuccess = (payload) => {
  return { type: types.PLACES_SUCCESS, payload };
};

export const placesFailure = () => {
  return { type: types.PLACES_FAILURE };
};

export const placesdata = (payload) => (dispatch) => {
  dispatch(placesRequest());
  axios
    .get("http://localhost:8080/items", payload)
    .then((r) => {
      dispatch(placesSuccess(r.data));
    })
    .catch((e) => {
      dispatch(placesFailure(e));
    });
};

// export const getRestuarant =(params)= (dispatch) => {
//   dispatch(restaurantRequest());
//   return axios
//     .get("http://localhost:8080/restaurants")
//     .then((res) => {
//       dispatch(restaurantSuccess(res.data));
//     })
//     .catch((err) => dispatch(restaurantFailure()));
// };
export const getRestuarant = (dispatch) => {
  dispatch(restaurantRequest());
  return axios
    .get("https://trip-advisor.onrender.com/hotels")
    .then((res) => {
      dispatch(restaurantSuccess(res.data));
    })
    .catch((err) => dispatch(restaurantFailure()));
};


export const getSight = (dispatch) => {
  dispatch(sightRequest());
  return axios
    .get("http://localhost:8080/sight")
    .then((res) => {
      dispatch(sightSuccess(res.data));
    })
    .catch((err) => dispatch(sightFailure()));
};
export const addToBasket = () => (dispatch) => {
  dispatch(addToBasketRequest());
  return axios
    .post("http://localhost:8080/sight")
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
