import React from "react"
import { useUsers } from "../hooks"
// import Icon from '../lib/Icon'
import {Link} from 'react-router-dom'

export function NotGoing(props){
    const {notGoing} = useUsers()

    console.log('Not Going:',notGoing)
    return (
        <div>
        <div className="HomeLink"><Link to={'/'}>Home</Link></div>
        <div className="goingContainer">
        {notGoing.map((user,i) =>{
            return(
                <div className="goingUserContainer" key={user.id}>
                    <div className="imageContainer">
            <img className="userPic" width='150px' src={user.picture} alt="No Available "/>
            </div>
            <div className="userInfo">
            <div className="userName">Name: {user.fname}</div>
            <div className="userPhone">Phone: {user.phone}</div>
            <div className="userEmail">Email: {user.email}</div>
            </div>
            
            </div>
         ) })}
         </div>
        </div>
    )
}