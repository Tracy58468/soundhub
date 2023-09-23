import "./styling.css";
import song from "./SongData";

const Table = ({ song }) => {
  return (
      <div>
      <h4>Song Name: <em>{song.songName}</em></h4>
      
      <h4>Artist: <em>{song.artist}</em></h4>
      console.log(song);
      <table>
       <thead>
        <tr>
          <th>Song Platform</th>
          <th>Links</th>
        </tr>
        </thead>
        <tbody>
         
        {song.songURLS.map((songData,id) => {
        
        return (

        <tr key={id}>  
				<td>{songData.urlName}</td>
				<td>{songData.url}</td>
				
			</tr>
            );
    })}
        </tbody>
      </table>
      </div>
   );
};

export default Table;