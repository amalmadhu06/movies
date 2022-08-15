import React from "react";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";

const Search = () => {
  const { searchParam, handleOnChange, handleSumbit } =
    useContext(GlobalContext);

  return (
    <div>
      <input
        name="search"
        // value={searchParam}
        onChange={handleOnChange}
        placeholder="Search movie"
      />
      <button onClick={handleSumbit}>Search</button>
    </div>
  );
};

export default Search;
