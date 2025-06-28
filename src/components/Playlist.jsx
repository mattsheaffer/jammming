import React from 'react';
import Tracklist from './Tracklist';

export default function Playlist(props) {
    return (
        <>
            <h2>PlayList</h2>
            <Tracklist 
                tracks={props.playlistTracks} 
                onRemove={props.onRemove}
            />
        </>
    );
}