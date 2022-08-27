import * as type from "../actions/actionsTypes"

const initialState={
    users:[],
    isLoading:false,
    error:''
}

const usersReducers=(state=initialState,action)=>{

    switch (action.type){
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

export default usersReducers