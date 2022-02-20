import React from "react";
import { useState } from "react";
const SearchBar = (props) => {
  const { setSearchedMovies, setMovies, welcomeText, Error } = props;

  const [searchMovies, setsearchMovies] = useState("");

  let handleSearch = () => {
    let Movie = document.getElementById("search").value;
    setSearchedMovies(Movie);
    welcomeText(false);
  };

  let handleReset = () => {
    setMovies("");
    setsearchMovies("");
    welcomeText(true);
    Error(false);
  };

  let handleInputChange = (e) => {
    setsearchMovies(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        className="form-control"
        type="text"
        value={searchMovies}
        placeholder="Search the movie by name"
        id="search"
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="btn btn-primary m-3">
        Search
      </button>
      <button className="btn btn-warning m-3" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default SearchBar;
