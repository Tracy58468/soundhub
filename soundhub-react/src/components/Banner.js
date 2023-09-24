//displays the Banner 
import "./styling.css";

export default function Banner(){

    return(

            <div className = "banner">
                <img src = "./images/guitar-3567767_1920.jpg" alt = "guitar with notes and accidentals" className = "bannerimg"/>
               <header><h1> Welcome to SoundHub</h1></header>
               <h2>Here are your Song Links!</h2>

            </div>

    );
    
}