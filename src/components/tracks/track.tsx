import { useContext } from "react";
import { TrackContext } from "../../providers/TracksContext";
import { DivTracksStyle } from "./styleTracks";

export const Tracks = ({tracks}: any) => {
  const { setModalTracks } = useContext(TrackContext);
  const albumId = tracks.id

  return (
    <DivTracksStyle>
      <table>
        <thead>
          <tr>
            <th>Nº: </th>
            <th>Faixa: </th>
            <th>Duração: </th>
            <th>
              <button
                id={albumId}
                onClick={() => (setModalTracks(true))}
              >
                Adicionar nova Faixa
              </button>
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
                <button>Lixeira</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DivTracksStyle>
  );
};
