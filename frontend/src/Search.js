import React from "react";

const Search = props => {
  // console.log("Props in search", props)
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.inputValue}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
