import React, { useRef } from "react";

interface  SearchProps {
  handleSearchSubmit: Function;
}

function Search(props: SearchProps) {
  const inRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inRef.current) {
      props.handleSearchSubmit(inRef.current.value);
    }
  }

  return (
    <div className="input-group">
      <input type="text" defaultValue={'tom'} ref={inRef} id="search" placeholder="Search for a Celebrity" />
      <button className="primary" onClick={() => handleClick()} >Search</button>
    </div>
  );
}

export default Search;
