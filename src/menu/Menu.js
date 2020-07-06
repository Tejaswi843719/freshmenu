import React, { useContext } from 'react';
import Burgers from './Burgers';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Biryani from './Biryani';
import Noodles from './Noodles';
import Desserts from './Desserts';
import Sandwich from './Sandwich';
import Paratha from './Paratha';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CartContext } from './ContextApi';

const Menu = () => {

    const { state:
        {
            burger,
            pizza,
            pasta,
            biryani,
            noodles,
            dessert,
            sandwich,
            paratha,
            cart
        }, handleUpdate
    } = useContext(CartContext);
    return (
        <>
            <div className="py-5" id="background" style={{
                backgroundImage: `url("https://images.pexels.com/photos/1213859/pexels-photo-1213859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`
                , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}>
                <h1 class="text-center text-white mt-5 mb-5">MENU</h1>
            </div>
            <div className="container ">
                <Router>
                    <div className="row bg-light mt-3">
                        <div className="col"><Link style={{textDecoration:"none"}}to="/burgers"><h5 className="mt-3 text-dark">Burgers</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/pizza"><h5 className="mt-3 text-dark">Pizza</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/pasta"><h5 className="mt-3 text-dark">Pasta</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/biryani"><h5 className="mt-3 text-dark">Biryani</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/noodles"><h5 className="mt-3 text-dark">Noodles</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/desserts"><h5 className="mt-3 text-dark">Desserts</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/sandwich"><h5 className="mt-3 text-dark">Sandwiches</h5></Link></div>
                        <div className="col"><Link style={{textDecoration:"none"}}to="/paratha"><h5 className="mt-3 text-dark">Paratha</h5></Link></div>
                    </div>
                    <Route exact path="/burgers" component={Burgers}></Route>
                    <Route exact path="/pizza" component={Pizza}></Route>
                    <Route exact path="/pasta" component={Pasta}></Route>
                    <Route exact path="/biryani" component={Biryani}></Route>
                    <Route exact path="/noodles" component={Noodles}></Route>
                    <Route exact path="/desserts" component={Desserts}></Route>
                    <Route exact path="/sandwich" component={Sandwich}></Route>
                    <Route exact path="/paratha" component={Paratha}></Route>
                </Router>
            </div>
        </>
    )
}

export default Menu