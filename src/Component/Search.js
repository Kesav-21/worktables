import React, { useState } from 'react';
import SearchList from './SearchList';

const Search=({ details })=>{

  const [searchField, setSearchField] = useState("");
  const [searchResult,setSearchResult]=useState(false);

  const filteredEmployee = details.filter(
    employee => {
      return (
        employee
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        employee
        .position
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <SearchList filteredEmployee={filteredEmployee} />
    );
  }
  const searchHandler=()=>{
    searchField==="" ? setSearchResult(!searchResult):setSearchResult(!searchResult) 
    searchResult ? document.getElementById("search").style.display="block":document.getElementById("search").style.display="none"
  }

  return (
    <section className="search-section">
      <div className="">
        <input 
          className=""
          type = "search" 
          placeholder = "Search People"
          onChange = {handleChange}
        />
        <input type="button" value="search" onClick={searchHandler}/>
      </div>
      <div id='search'>
      {searchList()}
      </div>
    </section>
  );
}

export default Search;