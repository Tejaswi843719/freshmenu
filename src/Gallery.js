import React from 'react';
import './Home.css';
const Gallery = () => {
 
    return (
        <>     
  <div>  
  <div className="py-5"  style={{
        backgroundImage: `url("https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`
        , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}><h1 class="text-center text-white mt-5 mb-5 display-4">OUR FOOD GALLERY</h1></div> 
      <div id="image" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

    <div className="row ml-5">
    <div className="col-sm-4 mx-auto img-responsive img-fluid" id="food"><img className="rounded-circle mt-5 " data-toggle="tooltip" data-placement="top" title="chopped vegetable salad" src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive img-fluid " id="food"><img className="rounded-circle mt-5 " data-toggle="tooltip" data-placement="top" title="Bread with soup" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive img-fluid" id="food"><img className="rounded-circle mt-5 " data-toggle="tooltip" data-placement="top" title="Tacos with Lime" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    </div>

    <div className="row  ml-5 mt-5">
    <div className="col-sm-4 mx-auto img-responsive"id="food"><img className="rounded-circle mt-5 " data-toggle="tooltip" data-placement="top" title="Fish salad dish" src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive" id="food"><img className="rounded-circle mt-5" data-toggle="tooltip" data-placement="top" title="Potato Fries With leaf" src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive" id="food"><img className="rounded-circle mt-5" data-toggle="tooltip" data-placement="top" title="Chicken Grill" src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    </div>

    <div className="row  ml-5 mt-5">
    <div className="col-sm-4 mx-auto img-responsive" id="food"><img className="rounded-circle mt-5 " data-toggle="tooltip" data-placement="top" title="Chocolate Cake" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive" id="food"><img className="rounded-circle mt-5" data-toggle="tooltip" data-placement="top" title="Berry Cream Dessert" src="https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" width="350"></img></div>
    <div className="col-sm-4 mx-auto img-responsive" id="food"><img className="rounded-circle mt-5" data-toggle="tooltip" data-placement="top" title="Icecream-Butterscotch" src="https://tse3.mm.bing.net/th?id=OIP.YUdidBZ7OnJDg8W9UY3O2AHaEK&pid=Api&P=0&w=267&h=151" height="350" width="350"></img></div>
    </div>
    
    </div>
    </div>  
</>
    )

}
export default Gallery