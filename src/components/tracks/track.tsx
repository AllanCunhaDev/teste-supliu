import { useContext } from "react";
import { TrackContext } from "../../providers/TracksContext";

export const Tracks = () => {
  const { tracks} = useContext(TrackContext);
  console.log(tracks);
  return (
    <>
      <ul>
        {tracks?.map((tracks: any) => {
          <li key={tracks.id}>
            <div>
              <p>Nº : {tracks.number}</p>
              <p>Faixa : {tracks.title}</p>
              <p>Duração</p>
              <p>excluir</p>
              <p>numero Qtd</p>
              <p>nome faixa</p>
              <p>min</p>
              <button>lixeira</button>
            </div>
          </li>;
        })}
      </ul>
    </>
  );
};
