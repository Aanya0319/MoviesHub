import React, { useEffect, useState } from "react";
import { getdata } from "../api/data";
import { BookingForm } from "./BookingForm";

export const Home = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [searchdata,setsearchdata]=useState("")
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  

  const getmoviedata = async () => {
    try {
      const res = await getdata();
      setmoviedata(res.data.results || []);
    } catch (error) {
      console.error("Failed to fetch movie data", error);
    }
  };

  useEffect(() => {
    getmoviedata();
  }, []);

  const flitermovie=moviedata.filter((movie)=>(
    movie.original_title.toLowerCase().includes(searchdata.toLowerCase())
  ))

  

  
  return (
    <>
    
    <div className="search-box">
            <input type="text" className="from-control mb-4 ms-2 w-25"
             placeholder="search movie" value={searchdata}
             onChange={(e)=>setsearchdata(e.target.value)}></input>
    </div>     
    
    <div className="movie-container">
           
      
      {flitermovie.map((movie) => (
        <div className="movie-card" key={movie.id}>
          
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        <h3>{movie.original_title}</h3>
        
         <button onClick={() => setSelectedMovie(movie)}>
              Book Now
            </button>

        </div>
      ))}
    </div>
     {/* Booking Form */}
      {selectedMovie && (
        <BookingForm
          movie={selectedMovie}
          closeForm={() => setSelectedMovie(null)}
        />
      )}
    
    
  
</>
)};
       
