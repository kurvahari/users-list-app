import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import usersReducers from "./reducers/usersReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig={
    key:"persist-users",
    storage
 }

const persistreducer=persistReducer(persistConfig,usersReducers)

const store=createStore(persistreducer,composeWithDevTools(applyMiddleware(logger,thunk)))
const persistor=persistStore(store)

export {persistor}

export default store