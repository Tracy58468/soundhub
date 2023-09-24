import { useEffect, useState } from 'react';

import jsonData from './song_info.json';
import SongInfo from './SongInfo';
let songDetails=jsonData;

const LASTFM_KEY = process.env.REACT_APP_LASTFM_KEY;
const LASTFM_URL = process.env.REACT_APP_LASTFM_BASEURL;

console.log("before function:   ",LASTFM_KEY, LASTFM_URL);
// console.log(loadData);

function SearchSong() {

  const [songName, setSongName] = useState("");
  const [songData, setSongData ] = useState([]);
  const[clicked,isClicked] =useState(false);
  // setSongData(songDetails);
 // const [data, setData] = useState();
    // // const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    isClicked(true);
    console.log("am in searchsong");
    // setSongData(songDetails);
    const URL=`${LASTFM_URL}method=track.search&track=${songName}&api_key=${LASTFM_KEY}&format=json`;
    console.log(URL);

   
    try {
      fetch(URL)
      .then(response => response.json())
      .then(body => setSongData(body))
     
      // // setSongData();
      // .then(data=> setSongData(data)));
    } catch (err) {
      setErr(err.message);
   
  };

  // console.log("last fm data: ",songData);
   
  };
  
  // console.log(jsonData);

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
            }}
        />

        <button type="submit" onSubmit={() => handleSubmit}>Search</button>

      </form>
      
      {/* {console.log(songData)} */}
      
      {clicked ? <SongInfo songData={songData} /> : null}

    </div>

  )
}

export default SearchSong