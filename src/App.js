import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Head from './Home/Head';
import Contact from './Contact';
import Menu from './menu/Menu';
import Cart from './menu/Cart';
import Login from './Login';
import Gallery from './Gallery';

import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import useMenuAPI from './menu/useMenuAPI'
const App = () => {
  return (
    <div >

      <Router>
      
        <Head></Head>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Gallery" component={Gallery}></Route>
      
    
        </Router> 
    
    </div>
  )
}

export default App;
