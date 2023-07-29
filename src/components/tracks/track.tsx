import { useContext } from "react";
import { TrackContext } from "../../providers/TracksContext";

export const Tracks = () => {
  const { tracks } = useContext(TrackContext);
  console.log(tracks);
  return (
    <div>
      {tracks === 0 ? (
        <div>
          <p>Sem faixas nesse Álbum.</p>
          <button>Adicionar faixas +</button>
        </div>
      ) : (
        <ul>
          <li key={tracks}>
            <div>
              <p>Nº : </p>
              <p>Faixa : {tracks}</p>
              <p>Duração</p>
              <p>excluir</p>
              <p>numero Qtd</p>
              <p>nome faixa</p>
              <p>min</p>
              <button>lixeira</button>
            </div>
          </li>
          {/* {tracks?.map((tracks: any) => {
                
              })} */}
        </ul>
      )}
    </div>
  );
};
