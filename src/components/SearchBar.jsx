import React, { useState } from 'react';

export default function SearchBar() {
    const [term, setTerm] = useState('');

    function handleTermChange(e) {
        setTerm(e.target.value);
    }
    
    return (
        <>
            <form className='search' >
                <input id='searchBar' type='text' value={term} onChange={handleTermChange} placeholder='search...' />
                <button>SEARCH</button>
            </form>
        </>
    );
}