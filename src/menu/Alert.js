import React from 'react'
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const Alert=() =>{
    return (
        <div className="container p-3 text-center">
            <div className="text-center display-4"><img className="img-fluid" src="https://www.freshmenu.com/pages/menu/images/ghost1.1.svg" width="600" height="450"/>
            
            </div>
            <div className="diplay-6"><b>Your cart is empty</b><br/>Add some delicious food available on our menu to checkout.</div>
            <Link to="/menu" ><button className="btn btn-warning btn-center btn-xxl" id="btn_menu">Menu</button></Link>
           
        </div>
        
    )
}

export default Alert