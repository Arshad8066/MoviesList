import React, { useContext } from "react";
import { AppContext } from "../context";
import {NavLink} from 'react-router-dom';

const Movies = () => {
  const { movie,isLoading,isError } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="movies-section">
        
       {isError.show  ? isError.msg
       :<div className="loading">Loading...</div>
    } 

        {/* {isError.show && isError.msg} */}
      </div>
    );
  }
  return (
    <section className="movie-page">
      <div>
        {movie.map((movies) => {
            const { imdbID,Title , Poster} =  movies
          return (
            <>
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card" onClick={() => console.log('first')}>
                    <div className="card-info">
                        <h2 key={imdbID}>{Title}</h2>
                        <img alt="" src={Poster}/>

                    </div>
                </div>
              </NavLink>
            </>
          );
        })}
        Movies
      
      </div>
    </section>
  );
};

export default Movies;
