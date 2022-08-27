import { type } from "@testing-library/user-event/dist/type";
import { createRenderer } from "react-dom/test-utils";

const initialState={
    users:[],
    isLoading,
    error
}

export default usersReducers=createRenderer(state=initialState,action){
    switch(action.type){
        case type.FETCH_USER_START:
            return{
                ...state,
                isLoading:true
            }
        case type.FETCH_USER_SUCCESS:
            return{
                users:action.payload,
                isLoading:false,
                ...state
            }
        case type.FETCH_USERS_FAILUR:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}