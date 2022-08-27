import axios from "axios"
import * as type from "./actionsTypes"

const fetchUsersStart=()=>{
    return{
        type:type.FETCH_USER_START
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type:type.FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUersFailur=(error)=>{
    return{
        type:type.FETCH_USERS_FAILUR,
        payload:error
    }
}

const fetchusers=()=>{
    return function(dispatch){
        dispatch(fetchUsersStart())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const users=response.data
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            dispatch(fetchUersFailur(error.message))
        })

    }
}

export default fetchusers
