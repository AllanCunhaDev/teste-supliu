import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnModal } from "../buttons/buttonModalAdd";
import { DivContainerModal } from "./styleModalAdd";

export const ModalAdicionar = () => {
  const { setModal, createAlbum, loading } = useContext(AlbumContext);

  const { handleSubmit, reset, register } = useForm();

  const handle = (param : any) => {
    console.log(param);
    createAlbum(param);
    reset();
  };

  return (
    <DivContainerModal>
      <form onSubmit={handleSubmit(handle)} noValidate>
        <div>
          <input
            id="name"
            {...register("name")}
            type="text"
            placeholder="Titulo do Album"
          ></input>
          <input
            id="year"
            {...register("year")}
            type="number"
            placeholder="ano"
          ></input>
          <div>
            <BtnModal type="submit">
              {loading ? "Enviando..." : "Enviar"}
            </BtnModal>
            <BtnModal onClick={() => setModal(false)}>Cancelar</BtnModal>
          </div>
        </div>
      </form>
    </DivContainerModal>
  );
};