import { useContext } from "react";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnDeleteAlbum } from "../buttons/buttonDeleteAlbum";
import { Tracks } from "../tracks/track";

export const Albuns = () => {
  const { albuns, deleteAlbum, filterAlbuns } =
    useContext(AlbumContext);

  return (
    <div>
      <ul>
        {albuns?.map((album: any) => {
          if (
            !filterAlbuns ||
            album.name.toLowerCase().includes(filterAlbuns.toLocaleLowerCase().trim())
          ) {
            return (
              <li key={album.id}>
                <span>
                  Álbum : {album.name}, {album.year}
                </span>
                <BtnDeleteAlbum
                  onClick={() => {
                    deleteAlbum(album.id);
                  }}
                >
                  .
                </BtnDeleteAlbum>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <Tracks/>
    </div>
  );
};
