//Displays input from json file to front end  
import SearchSong from "./SearchSong";
import { useState } from "react";

export default function SongInfo({songData}){


    return(
      <>
        <div className="displaySong">
     
      {songData.map(song => {
   return (
      <ul>
        <li>song.name</li>
        <li>song.type</li>
        <li>song.album.name</li>
        </ul>
   )
})}
    </div>
      
       
        </>
    );


}