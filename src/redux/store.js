import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import usersReducers from "./reducers/usersReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {logger} from "redux-logger";




const store=createStore(usersReducers,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store