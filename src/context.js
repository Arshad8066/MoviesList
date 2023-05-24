import { createContext, useEffect, useState } from "react";

// http://img.omdbapi.com/?apikey=[yourkey]&
//  b5c0979

// http://www.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?apikey=b5c0979&s=titanic
export const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [searchInput, setSearchInput] = useState("movie");

  useEffect(() => {
    let timeOut= setTimeout(() => {
        getMovies(`${API_KEY} &s=${searchInput}`);
    },500); 

    return () => clearTimeout(timeOut);
  }, [searchInput]);

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(true)
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ isError, isLoading, movie, searchInput, setSearchInput }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
