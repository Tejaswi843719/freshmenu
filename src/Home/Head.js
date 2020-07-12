import React, { useContext }  from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import { CartContext } from '../menu/ContextApi';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Head = () => {
  const {state:{cart}}=useContext(CartContext)
    return (
        <>
     
        <Navbar collapseOnSelect  variant="dark" expand="lg" className="bg-warning">
          
          <Navbar.Toggle className="bg-warning" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/"><img className="ml-5" src="https://www.freshmenu.com/images/fm-header-logo.svg" height="80" width="200"></img></Link>
            <Nav className=" ml-auto">
              
              <Link to="/" style={{textDecoration:"none"}} ><Nav.Link href="Home" className="ml-5" style={{textDecoration:"none"}}><h5  className="mt-3 text-dark">Home<i class="fa fa-home"></i></h5></Nav.Link></Link>
              <Link  to="/menu" style={{textDecoration:"none"}}><Nav.Link href="Menu" className="ml-5" style={{textDecoration:"none"}}><h5  className="mt-3 text-dark">Menu<i class="fa fa-utensils"></i></h5></Nav.Link></Link>
              <Link  to="/Contact"  style={{textDecoration:"none"}}><Nav.Link href="Contact" className="ml-5" style={{textDecoration:"none"}}><h5 className="mt-3 text-dark">Contact us<i class="fa fa-phone"></i></h5></Nav.Link></Link>
              <Link  to="/Gallery" style={{textDecoration:"none"}}><Nav.Link href="Gallery" className="ml-5"  style={{textDecoration:"none"}}><h5  className="mt-3 text-dark">Gallery<i class="fa fa-image"></i></h5></Nav.Link></Link>
              <Link   to="/cart" style={{textDecoration:"none"}}><Nav.Link href="cart"className="ml-5"  style={{textDecoration:"none"}}><h5 className="mt-3 text-dark"><i className="fa fa-shopping-cart"></i>({cart.length})</h5></Nav.Link></Link>
              <Link to="/Login" style={{textDecoration:"none"}} ><Nav.Link href="Login" className="ml-5"  style={{textDecoration:"none"}}><h5 className="mt-3 text-dark">Login<i class="fa fa-user"></i></h5></Nav.Link></Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      
</>
    )

}
export default Head