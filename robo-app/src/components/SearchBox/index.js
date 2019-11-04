import React from 'react';

const SearchBox = ({ onSearch }) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search robots"
                onChange={onSearch}
            />
        </div>
    )
}

export default SearchBox;