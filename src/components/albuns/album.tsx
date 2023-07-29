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
                <span>
                  Álbum : {album.name}, {album.year}
                </span>
                <Tracks/>
                <BtnDeleteAlbum
                  onClick={() => {
                    deleteAlbum(album.id);
                  }}
                >
                  .
                </BtnDeleteAlbum>
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
