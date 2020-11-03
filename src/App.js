import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//react -router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import PageNOtFound from "./pages/pageNotfound";
import { UserContext } from './context/usecontext';
import Footer from "./Layout/footer"
import Header from "./Layout/header"
import firebaseConfig from "./config/firebaseConfig";

//init firebase
firebase.initializeApp(firebaseConfig);




const App=()=> {
  const[user,setUser]=useState(null)



  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="*" component={PageNOtFound}/>
        </Switch>
        <Footer/>

      </UserContext.Provider>
    </Router>
     
  );
}

export default App;
