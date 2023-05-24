import React, { useContext } from "react";
import { AppContext } from "../context";

const Search = () => {
  const { searchInput, setSearchInput } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(searchInput);
  };
  return (
    <div>
      <input
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
