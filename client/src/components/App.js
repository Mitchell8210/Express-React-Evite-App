import React from "react"
import {Going} from './Going'
import {NotGoing} from './NotGoing'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="appContainer">
    <Route exact path='/' component={Home}/>
    <Route path='/Going' component={Going}/>
    <Route path='/NotGoing' component={NotGoing}/>
   </div>
  </Router>
  )
}

export default App
