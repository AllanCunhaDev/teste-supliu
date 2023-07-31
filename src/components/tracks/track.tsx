import { useContext } from "react";
import { TrackContext } from "../../providers/TracksContext";
import { BtnAddTracks } from "../buttons/buttonAddTracks";
import { DivTracksStyle } from "./styleTracks";

export const Tracks = ({tracks}: any) => {
  const { deleteTracks } = useContext(TrackContext);

  return (
    <DivTracksStyle>
      <table>
        <thead>
          <tr>
            <th>Nº: </th>
            <th>Faixa: </th>
            <th>Duração: </th>
            <th>
            <BtnAddTracks tracks={tracks}/>
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.tracks.map((tracksParam: any) => (

            <tr key={tracksParam.id}>
              <td>{tracksParam.number}</td>
              <td>{tracksParam.title}</td>
              <td>{tracksParam.duration}min</td>
              <td>
                {" "}
                <button onClick={()=>deleteTracks(tracksParam.id)}>lixeira</button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </DivTracksStyle>
  );
};
