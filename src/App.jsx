import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
import Track from './components/Track';

function App() {

  return (
    <> 
      <div className='header'><h1>jaMMMer</h1></div>
      <div className='search'><SearchBar /></div>
      <div className='container'>
        <div className='search-results'><SearchResults /></div>
        <div className='playlist'><Playlist /></div>
      </div>
    
    <p>hello</p>
      <Tracklist />
      <Track />
    </>
  )
}

export default App
