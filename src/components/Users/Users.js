import { useSelector,useDispatch } from "react-redux"
import fetchusers from "../../redux/actions/actons"

import { useEffect } from "react"

const Users=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchusers())
    },[])
    const {usersList}=useSelector((state)=>({...state}))

    return(
        <div>
            <h1>Welcome to users</h1>
            {usersList.map((eachUser)=><p>{eachUser.id}</p>)}
        </div>
    )
}

export default Users