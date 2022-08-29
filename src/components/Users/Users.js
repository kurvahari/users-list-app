import {useDispatch,useSelector} from "react-redux"
import fetchusers from "../../redux/actions/actons"
import UserItem from "../UserItem/userItem"
import LoadingIcons from 'react-loading-icons'

import "./users.css"

import { useEffect } from "react"

const Users=()=>{
    const {isLoading}=useSelector((state)=>({...state}))
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchusers())
    },[])

    if(isLoading===true){
        return <h1>Loading.....</h1>
    }
    return(
        <div className="users-container">
            <h1 className="heading">Welcome to users</h1>
            <ul>
                <UserItem/>
            </ul>
        </div>
    )
}

export default Users