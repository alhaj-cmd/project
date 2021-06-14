import React, { createContext, useState }  from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home/Home";
import AddEvents from "./component/AddEvents/AddEvents";
import Header from "./component/Header/Header";

function App() {
  
  return (

    
    <Router>
     
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Event</Link>
          </li>
        </ul> 

         <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addEvents">
            <AddEvents/>
          </Route>
        </Switch>
        </div>
    </Router>

  );
}


export default App;
