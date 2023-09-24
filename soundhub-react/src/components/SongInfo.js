//Displays input from json file to front end  
import SearchSong from "./SearchSong";
import { useState } from "react";

export default function SongInfo({ songData }) {
    console.log("songinfo",songData);

    return (

        <div className="displaySong">

            <table className = "centerTable" >
                
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
                        <td>Spotify Link: </td><td><a href={songData.external_urls.spotify}>{songData.external_urls.spotify}</a></td>
                    </tr>
                
    
                </tbody>
            </table> */}


        </div>

    );


}