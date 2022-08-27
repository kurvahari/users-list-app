import * as type from "./actionsTypes"

const fetchUsersStart=()=>{
    return{
        type:type.FETCH_USER_START
    }
}

const fetchUsersSuccess=()=>{
    return{
        type:type.FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUersFailur=()=>{
    return{
        type:type.FETCH_USERS_FAILUR,
        payload:error
    }
}

