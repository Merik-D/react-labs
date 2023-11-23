import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ onInputChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    console.log(text);
    setSearchText(text);
    onInputChange(text);
  };

  return (
    <div>
      <form className="search_form">
        <input
          id="search_input"
          type="search"
          placeholder="Type something..."
          value={searchText}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchInput;
