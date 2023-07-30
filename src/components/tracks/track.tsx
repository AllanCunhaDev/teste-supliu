import { useContext } from "react";
import { iTrackTableProps } from "../../interfaces/interfaceTracksContext";
import { TrackContext } from "../../providers/TracksContext";
import { AddTrackModal } from "../modal/modalAddTrack";
import { DivTracksStyle } from "./styleTracks";

export const Tracks = ({ tracks }: iTrackTableProps) => {
  const { modalTracks, setModalTracks } = useContext(TrackContext);

  return (
    <DivTracksStyle>
      <table>
        <thead>
          <tr>
            <th>Nº: </th>
            <th>Faixa: </th>
            <th>Duração: </th>
            <th>
              <button onClick={() => setModalTracks(true)}>
                Adicionar nova Faixa
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((tracksParam: any) => (
            <tr key={tracksParam.id}>
              <td>{tracksParam.number}</td>
              <td>{tracksParam.title}</td>
              <td>{tracksParam.duration}</td>
              <td>
                {" "}
                <button>Lixeira</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalTracks ? <AddTrackModal /> : <></>}
    </DivTracksStyle>
  );
};
