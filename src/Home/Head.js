import React, { useContext }  from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import { CartContext } from '../menu/ContextApi';


const Head = () => {
  const {state:{cart}}=useContext(CartContext)
    return (
        <>
        
        <div className="row  bg-light text-dark py-3">
            <div className="col-4 ml-5"><Link to="/"><img src="https://www.freshmenu.com/images/fm-header-logo.svg" height="50" width="150"></img></Link></div>
            
            <div className="col"><Link style={{textDecoration:"none"}} to="/"><h5  className="mt-3 text-dark">Home<i class="fa fa-home"></i></h5></Link></div>
            <div className="col"><Link style={{textDecoration:"none"}} to="/menu"><h5  className="mt-3 text-dark">Menu<i class="fa fa-utensils"></i></h5></Link></div>
            <div className="col"><Link  style={{textDecoration:"none"}} to="/Contact"><h5 className="mt-3 text-dark">Contact us<i class="fa fa-phone"></i></h5></Link></div>
            <div className="col"><Link style={{textDecoration:"none"}} to="/Gallery"><h5  className="mt-3 text-dark">Gallery<i class="fa fa-image"></i></h5></Link></div>
            <div className="col"><Link  style={{textDecoration:"none"}} to="/cart"><h5 className="mt-3 text-dark"><i className="fa fa-shopping-cart"></i>({cart.length})</h5></Link></div>
            <div className="col"><Link style={{textDecoration:"none"}} to="/Login"><h5 className="mt-3 text-dark">Login<i class="fa fa-user"></i></h5></Link></div>
            <div>
</div>
        </div>
        
      
</>
    )

}
export default Head