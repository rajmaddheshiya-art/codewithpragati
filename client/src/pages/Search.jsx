import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
    return (
        <div className="searchDiv">
            <IoSearchSharp id="searchIcons" />
            <input type="search" name="" placeholder="Search..." id="searchInput" />


        </div>
    )
}

export default Search