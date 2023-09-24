//Displays input from json file to front end  
import SearchSong from "./SearchSong";
import { useState } from "react";

export default function SongInfo({ songData }) {


    return (

        <div className="displaySong">

            <table >
                
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
            </table>


        </div>

    );


}