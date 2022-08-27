import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import usersReducers from "./reducers/usersReducers";



const store=createStore(usersReducers,applyMiddleware(thunk))

export default store