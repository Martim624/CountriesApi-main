// import { useState } from "react";
import React from "react";
const Search = ({ onSearch }: { onSearch: (newValue: string) => void }) => {
  // const [inputText, setInputText] = useState("");

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputText(e.target.value.toLowerCase());
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        id="outlined-basic"
        onChange={inputHandler}
        placeholder="Search"
        required
      />
    </div>
  );
};

export default Search;
