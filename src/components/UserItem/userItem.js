import { useSelector } from "react-redux"
import "./userItem.css"


const UserItem=()=>{
    const{usersList}=useSelector((state)=>({...state}))
    return(
        <div className="item-container">
            {usersList.map((eachUser)=>(
                <p className="item-card" key={eachUser.id}>{eachUser.name}</p>
            ))}

        </div>
    )
}

export default UserItem