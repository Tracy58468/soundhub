//This form will display when APOD button is clicked. displays date picker for APOD selection.

import React, { useState ,useEffect} from "react";
import SongInfo from "./SongInfo";


const LASTFM_KEY = process.env.REACT_APP_LASTFM_KEY;
const LASTFM_URL = process.env.REACT_APP_LASTFM_BASEURL;

console.log("before function:   ",LASTFM_KEY, LASTFM_URL);

export default function SearchTrack({songName}){
    
    
    
    
    const URL=`${LASTFM_URL}method=track.search&track=${songName}&api_key=${LASTFM_KEY}&format=json`;
    console.log(URL);

    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    

   
    

    const handleClick = async() => {
    
        try {
            const response = await fetch(baseURL);
      
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
      
            const result = await response.json();
           
            
            setData(result);
          } catch (err) {
            setErr(err.message);
         
        };
      
      
        // setData(d)
    };

    return (   
        <div >

            
                 {/* {data ? <SongInfo songData={data} /> : null}  */}
                 
              </div>
   
   );
            

   
    

        
}
