import React from "react";

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    
    
    return (
        <input placeholder="Busca tu To DO"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value);}} />
    );
}

export { TodoSearch };