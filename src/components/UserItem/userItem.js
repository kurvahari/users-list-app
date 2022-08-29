import { useSelector} from "react-redux"
import "./userItem.css"


const UserItem=()=>{
    const{usersList}=useSelector((state)=>({...state}))

    return(
        <div className="item-container">
            {usersList.map((eachUser)=>(
                <li className="item-card" key={eachUser.id}>
                <p >{eachUser.name}</p>
                <button className="button">Remove</button>
                </li>
            ))}
            <div>
            </div>

        </div>
    )
}

export default UserItem