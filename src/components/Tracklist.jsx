import React from 'react';
import Track from './Track';

export default function Tracklist(props) {

    return (
        <div className='TrackList'>
            {props.tracks.map((track) => {                
                
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
}