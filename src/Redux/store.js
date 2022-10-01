import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as AppReducer } from "./AppRedux/reducer"
import { reducer as AuthReducer } from "./AuthRedux/reducer"
import thunk from "redux-thunk"
const RootReducer = combineReducers({AppReducer,AuthReducer})
export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))


// import { createStore,applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducer from "./rootReducer"

// const middleware = [thunk]

// if (process.env.NODE_ENV === "development"){
//     middleware.push(logger)
// }

// export const store = createStore(rootReducer,applyMiddleware(...middleware));