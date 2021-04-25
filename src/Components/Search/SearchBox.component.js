import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="bg-light-green dib f3 ma2 grow shadow-5">
      <input
        className=""
        type="search"
        placeholder="Search Name of User"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
