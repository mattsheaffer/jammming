import React from 'react';
import Tracklist from './Tracklist';
import Track from './Track';

export default function SearchResults(props) {

    return (
        <>
            <div><h2>Results</h2></div>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </>
    );
}