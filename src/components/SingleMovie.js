import React,{ useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_KEY } from "../context";

const SingleMovie = () => {
  const { id } = useParams();

  const navigate = useNavigate()


  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let timeOut= setTimeout(() => {
        getMovies(`${API_KEY}&i=${id}`);
    },500); 

    return () => clearTimeout(timeOut);
  }, [id]);

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(true)
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } 
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="movies-section">
        <div className="loading">Loading....</div>
      </div>
    );
  }

  const handleBack = () =>{
    navigate('/')
  }

  return (
    <>
      <div>
        <section>
            <div>
                <figure>
                    <img alt="" src={movie.Poster}/>
                </figure>
                <h4>{movie.Title}</h4>
            </div>
            <button onClick={handleBack}>Go back</button>
        </section>
       
      </div>
    </>
  );
};

export default SingleMovie;
