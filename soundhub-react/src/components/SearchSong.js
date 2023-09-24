import { useState } from 'react';


function SearchSong() {
  const [songName, setSongName] = useState("");

  return (
        <form action="/" method="get">
        
        <input className='textbox'
            type="text"
            id="song-search"
            placeholder="Search a song"
            name="searchbar" 
            onChange={(e) => {
              setSongName(e.target.value);}}
        />
        <button className ='button' type="submit">Search</button>
    </form>
  )
}

export default SearchSong