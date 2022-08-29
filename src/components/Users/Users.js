import {useDispatch } from "react-redux"
import fetchusers from "../../redux/actions/actons"
import UserItem from "../UserItem/userItem"
import "./users.css"

import { useEffect } from "react"

const Users=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchusers())
    },[])

    return(
        <div className="users-container">
            <h1 className="heading">Welcome to users</h1>
            <UserItem/>
        </div>
    )
}

export default Users