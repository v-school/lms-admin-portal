import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth";
import submissionReducer from "./submissions";

const store = createStore(combineReducers({ authReducer, submissionReducer }), applyMiddleware(thunk));

export default store;