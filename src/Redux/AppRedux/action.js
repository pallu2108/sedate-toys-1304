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

export const sightSuccess = (payload) => {
  return { type: types.SIGHT_SUCCESS, payload };
};

export const sightFailure = () => {
  return { type: types.SIGHT_FAILURE };
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
    .get("http://localhost:8080/sight")
    .then((res) => {
      dispatch(sightSuccess(res.data));
    })
    .catch((err) => dispatch(sightFailure()));
};

