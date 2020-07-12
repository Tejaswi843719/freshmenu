import React, {useState,useEffect}  from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import Slide from './Slide';

const Home = () => {
  
    const [modal, setModal] = useState(false);
    const [details,setDetails] = useState(null)
    const getUserGeolocationDetails = () => {
  fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
  .then(response => response.json())
  .then(data =>setDetails(data));
    }
    const toggle = () => setModal(!modal);


    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/3a224c85-9cc8-11ea-9a4c-a51431f74172').then(response => response.json()).then(json => {
            setItem([...json])
        })
    }, []);
    return (
        <>
        <div className="ml-5"><button className="btn btn-light bg-white font-weight-bold text-dark ml-5"  onClick={getUserGeolocationDetails}>Current Location</button></div>
      <div>{details && <div className="ml-5">
           Your Current Location : {`${details.city}, ${details.state}, ${details.country_name}(${details.country_code}),Pincode:${details.postal}`}
         </div> }</div>
           <Slide/>
           <div className="container bg-warning p-1 mt-2 text-dark text-center"><b>Safety assured meals and contactless delivery</b></div>
            <div className="container p-3" >
        
                    <div className="row bg-dark" >
                        <div className="col-3.5 mx-auto mb-4 img-responsive mt-5" id="food" ><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/b639ca57-899e-48fe-9653-2f94663ea0ab.jpg" height="240" width="250" /></div>
                        <div className="col-3.5 mx-auto mb-4 img-responsive mt-5" id="food"><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/6ede4337-9e8b-49ad-a876-ffa132057267.jpg" height="240" width="250" /></div>
                        <div className="col-3.5 mx-auto mb-4 img-responsive mt-5" id="food"><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/872386f7-76fb-445c-b474-2b9ace5e17ab.png" height="240" width="250" /></div>
                        <div className="col-3.5 mx-auto mb-4 img-responsive mt-5" id="food"><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/1a0f43f0-699c-4859-a362-861c03c4710e.jpg" height="240" width="250" /></div>
                    </div>
                    

                
                <h1 className="mt-3 text-center font-weight-bold">Top Picks For You</h1>
                <div className="row container">
                    {item.map(({ image, type,rates}) => (
                        <>
                            <div className="col-md-4 container">
                                <div class="card shadow m-4" id="food">
                                    <img class="card-img-top" width="200" height="200" src={image} alt="Card image cap" />
                                    <div class="container card-body">
                                        <strong class="card-title" >{type}</strong><hr/>
                                        <div><kbd className="bg-success"><i className="fa fa-star"></i>{rates.rating}</kbd></div><hr/>
                                        <div className="text-muted">{rates.review}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <h1 className="display-3 text-center mt-3 mb-3 " >Famous Restaurants</h1><hr/>

            
                    <div className="row container   ">
                        <div className="col-md-3 mx-auto img-responsive ">
                            <img  src="https://tse4.mm.bing.net/th?id=OIP.QHJorrPk1wDeiKSnZFSsvAHaFD&pid=Api&P=0&w=256&h=175" height="250" width="250" /><br /><b >Malaka Spice</b></div>
                        <div className="col-md-3 mx-auto img-responsive">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.09gpuhh_hu-9agU6fodnFgHaE7&pid=Api&P=0&w=266&h=178" height="250" width="250" /><br /><b >Villa Maya</b></div>
                        <div className="col-md-3 mx-auto img-responsive">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.2G58d5P2qZNoy615NMuoaAHaGP&pid=Api&P=0&w=220&h=186" height="250" width="250" /><br /><b >Peshawri</b></div>
                        <div className="col-md-3 mx-auto img-responsive">
                            <img  src="https://tse1.mm.bing.net/th?id=OIP.TRodKOSt9LhPgV5F7cCVSwHaGf&pid=Api&P=0&w=212&h=186" height="250" width="250" /><br /><b >Pinch of Spice</b></div><br />
                    </div>

                </div>
 

            <div className="bg-dark">
                <div className="row ml-5" >
                    <div className="col-sm-4 mx-auto img-responsive">
                        <img className="ml-5" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" height="200" width="200" /><br/><b className="text-white ml-5">No Minimum Order</b>
                    </div>
                    <div className="col-sm-4 mx-auto img-responsive">
                        <img className="ml-4" src="http://www.trackinghawk.com/img/GPS-Tracking-Icon-300x300.png" height="200" width="200" /><br/><b className="text-white ml-5">Live Order Tracking</b>
                    </div>
                    <div className="col-sm-4 mx-auto img-responsive">
                        <img className="ml-4" src="https://www.houstonfood2u.com/images/logos/original-logos-500.png" height="200" width="200" /><br/><b className="text-white ml-5">Lightning-Fast Delivery</b>
                    </div>
                </div>
           

            </div>
            <div>
                <div className="row bg-warning" >
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-3">
                        <img className="ml-5"src="https://www.freshmenu.com/images/fm-header-logo.svg" height="100" width="170" />
                    </div>
                
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-3">
                    <img className="mt-4 ml-5" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" height="50" width="150" /></div>
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-3">
                    <img className="mt-4 ml-5" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" height="50" width="150" />
                    </div>
                    
                   
                </div>
                <div className="bg-dark ">
                        <div className="row justify-content-center pt-3 pb-3 ">
                         <h4 className="text-white">Follow Us On</h4>
                        <img className=" ml-3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" height="30" width="30" />
                        <img className=" ml-3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" height="30" width="30" />
                        <img className=" ml-3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" height="30" width="30" /> 
                        <br/>
                             
                </div>
                <div><h4 className="text-center text-white pb-3 mt-2">Copyrights Reserverd 2020<sup>©</sup></h4></div>
                </div>
            </div>

        </>
    )
}

export default Home