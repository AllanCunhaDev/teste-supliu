import { useContext } from "react";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnDeleteAlbum } from "../buttons/buttonDeleteAlbum";


export const Albuns = () => {

  const { setAlbuns, setDelAlbum} = useContext(AlbumContext);

  // console.log(setAlbuns)

  return (
    <div>
      <span>Album:{setAlbuns.name}</span>
            <div>
              <div>
                <p>Nº : </p>
              </div>
              <div>
                <p>Faixa : {}</p>
                <p>Duração : {}</p>
              </div>
            </div>
      <ul>
        {/* {setAlbuns.map((album) => (
          <li key={album.id}>
            <span>Album:{album.name}</span>
            <div>
              <div>
                <p>Nº : </p>
              </div>
              <div>
                <p>Faixa : {}</p>
                <p>Duração : {}</p>
              </div>
            </div>
          </li>
        ))} */}
      </ul>
      <BtnDeleteAlbum onClick={()=> {
        setDelAlbum(true)
        setAlbuns()
        console.log(BtnDeleteAlbum)
      }}>.</BtnDeleteAlbum>
    </div>
  );
};
