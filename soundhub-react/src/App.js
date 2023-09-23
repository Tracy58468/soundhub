import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Table from './components/Table';
import { useState } from "react";
import song from './components/SongData';

function App() {
  


  // console.log(song);
  return (
    <div className="App">
      <Banner />
      
      <Table song={song}/>
      <Footer />
    </div>
  );
}

export default App;
