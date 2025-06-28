import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import search from './util/TheAudioDB';

const searchResults = [
  {id: 1, title: 'In My Room', artist: 'The Beach Boys'},
  {id: 2, title: 'Lemme Know', artist: 'My Morning Jacket'},
  {id: 3, title: 'One of these days...', artist: 'Pink Floyd'},
  {id: 4, title: 'Blackbird', artist: 'The Beatles'},
];



function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.some(existingtrack => existingtrack.id === track.id)) {
      alert('track already selected');
      return;
    }
    setPlaylistTracks((prev) => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prev) => 
      prev.filter(currentTrack => currentTrack.id !== track.id));
  }


  return (
    <> 
      <div className='header'><h1>jaMMMer</h1></div>
      <div className='search'><SearchBar /></div>
      <div className='container'>
        <div className='search-results'>
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack}
          />
        </div>
        <div className='playlist'>
          <Playlist 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </>
  )
}

export default App
