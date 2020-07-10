import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import '../Playlist/Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar component />
        <div className="App-playlist">
        <SearchResults component />
        <Playlist />
    </div>
  </div>
</div>
    );
  }
}

export default App;