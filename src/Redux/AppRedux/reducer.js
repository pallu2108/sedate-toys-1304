import * as types from "./actionType";
const initialState = {
  hotel: [],
  restaurant: [],
  places: [],
  sight: [],
  isLoading: false,
  isError: false,
  basket: [],
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

    case types.CART_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.CART_SUCCESS: {
      return { ...state, isLoading: false, basket: payload, isError: false };
    }
    case types.CART_FAILURE: {
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

    case types.REMOVE_FROM_BASKET_REQUEST: {
      return { isLoading: true, isError: false };
    }

    case types.REMOVE_FROM_BASKET_SUCCESS: {
      return { ...state, isLoading: false, basket: payload, isError: false };
    }

    case types.REMOVE_FROM_BASKET_FAILURE: {
      return { isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
export { reducer };
