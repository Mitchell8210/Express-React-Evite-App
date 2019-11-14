import React from "react"
import { useUsers } from "../hooks"
import Icon from '../lib/Icon'
import {Link} from 'react-router-dom'



function Home() {
    const { user, goingUser, notGoingUser, going, clearAllGuests,notGoing } = useUsers()
  
  function handleGoing(user){
    goingUser(user)
  }
  function handleNotGoing(user){
    notGoingUser(user)
  }

  function clearAll(){
      clearAllGuests()
  }
  
    return (
        
      <div className="eviteContainer">
          <div className="clearAll" onClick={(e)=> clearAll()}>Clear All Guests</div>
          <div className="linksToPages">

              <Link to={'/Going'}>{going.length} Going</Link>
              <Link to={'/NotGoing'}>{notGoing.length} Not Going</Link>
          </div>
        <div className="imageContainer">
        <img className="userPic" width='150px' src={user.picture} alt="No Available "/>
        </div>
        <div className="userInfo">
        <div className="userName"><span>Name:</span> {user.fname} {user.lname}</div>
        <div className="userPhone"><span>Phone:</span> {user.phone}</div>
        <div className="userEmail"><span>Email:</span> {user.email}</div>
        </div>
        <div className="buttons">
          <div onClick={(e)=>handleGoing(user)} className="going"><Icon icon="check"></Icon></div>
          <div onClick={(e)=> handleNotGoing(user)} className="notGoing"><Icon icon="times"></Icon></div>
        </div>
      </div>
    )
  }
  
  export default Home
  