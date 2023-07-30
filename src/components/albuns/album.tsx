import { useContext } from "react";
import { iAlbuns } from "../../interfaces/interfaceAlbumContext";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnDeleteAlbum } from "../buttons/buttonDeleteAlbum";
import { Tracks } from "../tracks/track";
import { DivContainerListAlbunsStyle } from "./styleAlbuns";

export const Albuns = () => {
  const { albuns, deleteAlbum, filterAlbuns } = useContext(AlbumContext);
  return (
    <div>
      <ul>
        {albuns?.map((album: iAlbuns) => {
          if (
            !filterAlbuns ||
            album.name.toLowerCase().includes(filterAlbuns.toLowerCase().trim())
          ) {
            return (
              <DivContainerListAlbunsStyle key={album.id}>
                <div className="container_name_album_trash">
                  <span>
                    Álbum : {album.name}, {album.year}
                  </span>

                  <BtnDeleteAlbum
                    onClick={() => {
                      deleteAlbum(album.id);
                    }}
                  >
                    Limpar álbum
                  </BtnDeleteAlbum>
                </div>
                {album.tracks.length === 0 ? (
                  <div>
                    <p>Sem faixas nesse Álbum.</p>
                    <button>Adicionar faixas +</button>
                  </div>
                ) : (
                  <Tracks tracks={album.tracks}/>
                )}
              </DivContainerListAlbunsStyle>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};
