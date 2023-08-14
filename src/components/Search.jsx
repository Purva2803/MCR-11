import { movies } from "../data/data";
import React, { useState, useEffect } from "react";



export const Search = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");
  
    return (
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          const search = e.target.value.toLowerCase();
          setSearchInput(search);
  
          onSearch(search);
        }}
      />
    );
  };
  