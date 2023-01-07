import React from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ placeholder }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <IconContext.Provider value={{ color: "blue", size: "25px" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default SearchBar;
