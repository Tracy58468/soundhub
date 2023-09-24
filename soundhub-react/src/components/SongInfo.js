//Displays input from json file to front end  
import SearchSong from "./SearchSong";
import { useState } from "react";

export default function SongInfo({ songData }) {
    console.log("songinfo",songData);

    return (

        <div className="displaySong">
         {songData["results"]["trackmatches"]["track"].map((data, id) => {
        
        return (

           <div key={id}  >
            {/* {data.artist} */}
				{/* <td>{data.name}</td>
				<td>{data.type}</td>
				<td>{data.launchDate}</td> */}
				{/* <td>{data.operational ? "active":"inactive"}</td> */}
		</div>
            );
    })}
            
         
            
            
            

            {/* <table >
                
            <tbody>
                    <tr>
                        <td>Song Name: </td><td>{songData["name"]}</td>
                    </tr>
                    <tr>
                        <td>Artist Name: </td><td>{songData.artists[0]["name"]}</td>
                    </tr>
                    <tr>
                        <td>Album Name: </td><td>{songData["album"]["name"]}</td>
                    </tr>
                    <tr>
                        <td>Spotify Link: </td><td>{songData.external_urls.spotify}</td>
                    </tr>
                
    
                </tbody>
            </table> */}


        </div>

    );


}