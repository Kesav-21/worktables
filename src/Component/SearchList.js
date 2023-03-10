import React from 'react';

function SearchList({ filteredEmployee }) {
  const filtered = filteredEmployee.map(employee =>  <h1>Table Location:{employee.id}</h1>); 
  return (
    <div>
      
      {filtered}
    </div>
  );
}

export default SearchList;