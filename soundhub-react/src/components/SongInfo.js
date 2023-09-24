//Displays input from json file to front end  
import SearchSong from "./SearchSong";
import { useState } from "react";

export default function SongInfo({songData}){

    console.log("song data:", songData);
    // console.log("am here");
    console.log(songData["name"])
    console.log(songData["type"])
    console.log(songData["album"]["name"])
    
    return(
      
      <div className="displaySong">
            
        <ul>
          <li>{songData["name"]}</li>
          <li>{songData.artists[0]["name"]}</li>
          <li>{songData["album"]["name"]}</li>
          <li>{songData.external_urls.spotify}</li>
        </ul>
   
      </div>
       
    );


}