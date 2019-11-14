import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USER = "users/GET_USERS"
const GOING_TO_PARTY= 'users/OGING_TO_PARTY'
const NOT_GOING_TO_PARTY= 'users/NOT_GOING_TO_PARTY'

// initial state
const initialState = {
  user: {},
  going: [],
  notGoing: []

}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case GOING_TO_PARTY:
      return {...state, going: action.payload}
    case NOT_GOING_TO_PARTY:
      return {...state, notGoing: action.payload}
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
      const person={
        picture: resp.data.results[0].picture.large,
        fname: resp.data.results[0].name.first,
        lname: resp.data.results[0].name.last,
        phone: resp.data.results[0].phone,
        email: resp.data.results[0].email
      }
      dispatch({
        type: GET_USER,
        payload: person
      })
    })
  }
}
//POST CALLS FOR DATABASE

function goingPerson(user){
  return dispatch =>{
    axios.post('/users/going', {user}).then(resp=>{
    dispatch(getGoing())
    dispatch(getUsers())
  })
  }
}
 function notGoingPerson(user){
  return dispatch => {
    axios.post('/users/notgoing', {user}).then(resp=>{
    dispatch(getNotGoing())
    dispatch(getUsers())

    })
  }
}
// GET CALLS FOR USERS GOING SND NOT GOING

function getGoing(){
  return dispatch =>{
    axios.get('/users/going').then(resp=>{
      dispatch({
        type: GOING_TO_PARTY,
        payload:resp.data
      })
    })
  }
}
function getNotGoing(){
 return dispatch =>{
    axios.get('/users/notgoing').then(resp=>{
      dispatch({
        type: NOT_GOING_TO_PARTY,
        payload: resp.data
      })
    })
  }
}
// CALL TO CLEAR ALL GUESTS FROM LIST

function clearGuests(){
  return dispatch =>{
    axios.delete('/users').then(resp=>{
      dispatch({
        
      })
    })
  }
}
// custom hooks
export function useUsers() {
  const user = useSelector(appState => appState.userState.user)
  const going = useSelector(appState => appState.userState.going)
  const notGoing = useSelector(appState => appState.userState.notGoing)
  const dispatch = useDispatch()

  const goingUser = (user)=> dispatch(goingPerson(user))
  const notGoingUser = (user)=> dispatch(notGoingPerson(user))
  const clearAllGuests = () => dispatch(clearGuests())
  useEffect(() => {
    dispatch(getUsers())
    dispatch(getGoing())
    dispatch(getNotGoing())
  }, [dispatch])

  return { user, goingUser, notGoingUser, notGoing, going, clearAllGuests }
}
