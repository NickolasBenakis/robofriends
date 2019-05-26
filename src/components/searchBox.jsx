import React from 'react';


export default function SearchBox({ searchField, searchChange }) {

    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                aria-label="Search"
                type="search" placeholder="search robots" onChange={searchChange} />
        </div>
    );
}

