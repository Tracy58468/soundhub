import { useState } from 'react';

import jsonData from './song_info.json';
let songDetails=jsonData;

let  clicked=false;
// console.log(loadData);
const handleClick = ({songData}) => {
  
  clicked=true;
 
  return(
    <div className="displaySong">
     
    
 return (
    <ul>
      <li>songDetails.name</li>
      <li>songDetails.type</li>
      <li>songDetails.album.name</li>
      </ul>
 )

  </div>
  );
};

  


function SearchSong() {
  
  const [songName, setSongName] = useState("");
  const [songData, setSongData ] = useState();
  // setSongData(songDetails);


  console.log(jsonData);

  return (
        <div>
        
        <input className='textbox'
            type="text"
            id="song-search"
            placeholder="Search a song"
            name="searchbar" 
            onChange={(e) => {
              setSongName(e.target.value);
             }}
        />
       
        <button className ='button'  type="submit" onClick={()=>{setSongData(songDetails);handleClick()}}>Search</button>
             
    </div>
  )
}

export default SearchSong