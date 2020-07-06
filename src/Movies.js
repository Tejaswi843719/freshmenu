import React, { useState, useEffect } from 'react';
//import Stringify from '../Stringify';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [input,setInput]=useState('')
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=avengers&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const {Search,totalResults}=json
                setMovies([...Search])
                setIsLoaded(true)
            }, 2000)
        })
    }, []);
    const inputHandler=(e)=>{
        const {value}=e.target;
        setInput(value);
    }
    const Search=()=>{
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const {Search,totalResults}=json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })
    
    }
    return (

        <div class="body">
      <div className="input-group my-3">
                <input type="text"  onChange={inputHandler} className="form-control" placeholder="Search.." name="search" />
                <div className="input-group-append">
                    <button onClick={Search} className="btn btn-primary"  type="submit">Search</button>
                </div>
            </div>
            <br/><br/>
            {!isLoaded &&(<img src="https://media1.giphy.com/media/sSgvbe1m3n93G/200w.webp?cid=ecf05e47782fa34a8d841c7a2bbd29c7424f46b19f85205c&rid=200w.webp"/>)}

 <div class="row">
{movies.map(({Poster,Type,Year,Title})=>(
  
    <div class=" col-4 ">
    <div class="card ml-4" style={{width: '18rem'}}>
    <img src={Poster} width="150"class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{Title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
<li class="list-group-item">Year:{Year}</li>
<li class="list-group-item">Type:{Type}</li>
<li class="list-group-item"><button class="btn btn-warning">Watch now</button></li>
    </ul>
    
  </div><br/>
  </div>

))}

        </div>
        </div>
    )
}


export default Movies