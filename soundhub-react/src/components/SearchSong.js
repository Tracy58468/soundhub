import { useEffect, useState } from 'react';

import jsonData from './song_info.json';
import SongInfo from './SongInfo';
let songDetails=jsonData;

let  clicked=false;
// console.log(loadData);


function SearchSong() {
  
useEffect(() => {
  //Runs only on the first render
  setSongData(songDetails);
}, []);
  const [songName, setSongName] = useState("");
  const [songData, setSongData ] = useState({});
  const[clicked,isClicked] =useState(false);
  setSongData(songDetails);

  const handleClick = () => {
  
    isClicked(true);
    
    setSongData(songDetails);

  };
  


  console.log(jsonData);

  return (
        <div>
       
        <input className='textbox'
            type="text"
            id="song-search"
            placeholder="Search for a song"
            name="searchbar" 
            onChange={(e) => {
              setSongName(e.target.value);
             }}
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchSong