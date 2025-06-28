import React from 'react';

export default function Track(props) {
    
    function addTrackClickHandler(event) {
        props.onAdd(props.track);
    }

    function removeTrackClickHandler(event) {
        props.onRemove(props.track);
    }

    function renderTrackAction() {
        if (props.onAdd) {
            return (
                <div className='actionIcon'>
                    <button name={props.track.id} onClick={addTrackClickHandler}> + </button>
                </div>
            );
        } else {
            return (
                <div className='actionIcon'>
                    <button name={props.track.id} onClick={removeTrackClickHandler}> - </button>
                </div>
            );
        }
    }

    return (
        <>
            <div className='trackResult'>
                <div className='trackContainer'>
                    <p className='trackTitle'>{props.track.title}</p>
                    <p className='trackArtist'>{props.track.artist}</p>
                </div>
                {renderTrackAction()}
            </div>
        </>
    );
}