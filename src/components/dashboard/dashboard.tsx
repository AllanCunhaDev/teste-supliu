import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AlbumContext } from "../../providers/AlbumContext";
import { Albuns } from "../albuns/album";
import { BtnAddAlbum } from "../buttons/buttonAddAlbum";
import { ButtonFind } from "../buttons/buttonDashboard";
import { InputFind } from "../inputs/inputDashboard";
import { ModalAdicionar } from "../modal/modalAddAlbum";
import { ContainerDashboard } from "./styleDashboard";



export const Dashboard = () => {
  const {modal,setModal, filterAlbuns, setFilterAlbuns} = useContext(AlbumContext);

  return (
    <>
      <ContainerDashboard>
        <div className="card_geral_dashboard">
          <header>
            <div className="container_header">
              <img src={logo} />
              <h2>Discografia</h2>
            </div>
          </header>

          <div className="container_albuns">
            <div className="container_find">
              <InputFind id="btnFind" type="text" value={filterAlbuns} onChange={(e: any) => setFilterAlbuns(e.target.value)}  placeholder="Busque seu álbum aqui"/>
              <ButtonFind id="btnFind" type="button" >Procurar</ButtonFind>
            </div>

            <div className="album">
              <Albuns/>
            </div>
            <div className="div_btn_add">
              <BtnAddAlbum onClick={()=> setModal(true)}>Adicionar novo Album +</BtnAddAlbum>
            </div>
          </div>
            {modal ? <ModalAdicionar/> : <></>}
        </div>
      </ContainerDashboard>
    </>
  );
};