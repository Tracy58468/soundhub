import { useEffect, useState } from 'react';

import jsonData from './song_info.json';
import SongInfo from './SongInfo';
import BrythonCode from './BrythonCode';
const Brython = require('brython');

let songDetails=jsonData;

// console.log(loadData);

function SearchSong() {

  const [songName, setSongName] = useState("");
  const [songData, setSongData ] = useState({});
  const[clicked,isClicked] =useState(false);
  // setSongData(songDetails);

  const handleSubmit = (e) => {

    e.preventDefault();
    isClicked(true);
    // console.log("am in searchsong");
    setSongData(songDetails);
    
  };
  
  console.log(jsonData);

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <input className='textbox'
            type="text"
            id="song-search"
            placeholder="Search for a song"
            name="searchbar" 
            onChange={(e) => {
              setSongName(e.target.value);
              <BrythonCode songName={songName}/>
            }}
        />

        <button type="submit" onSubmit={() => handleSubmit}>Search</button>
          console.log(songName);
      </form>
      
      {console.log(clicked)}
      
      {clicked ? <SongInfo songData={songData} /> : null} 

    </div>

  )
}

export default SearchSong