import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';

import { useState } from "react";

import SearchSong from './components/SearchSong'
function App() {

  return (
    <div className="App">
      <Banner />
      <SearchSong />
      {/* <Table song={song}/> */}
      <Footer />
    </div>
  );
}

export default App;
