import * as types from "./actionTypes";
const initialState = {
  hotel: [],
  restaurant: [],
  places: [],
  sight: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.HOTEL_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.HOTEL_SUCCESS: {
      return { ...state, isLoading: false, hotel: payload, isError: false };
    }
    case types.HOTEL_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.PLACES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.PLACES_SUCCESS: {
      return { ...state, isLoading: false, places: payload, isError: false };
    }
    case types.PLACES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.RESTAURANTS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.RESTAURANTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        restaurant: payload,
        isError: false,
      };
    }
    case types.RESTAURANTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.SIGHT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.SIGHT_SUCCESS: {
      return { ...state, isLoading: true, isError: false, sight: payload };
    }

    case types.SIGHT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
export { reducer };
