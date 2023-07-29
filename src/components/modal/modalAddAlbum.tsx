import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnModal } from "../buttons/buttonModalAdd";
import { DivContainerModal, FormModalStyle } from "./styleModalAdd";

export const ModalAdicionar = () => {
  const { setModal, createAlbum, loading } = useContext(AlbumContext);

  const { handleSubmit, reset, register } = useForm();

  const handle = (param: any) => {
    createAlbum(param);
    reset();
  };

  return (
    <DivContainerModal>
      <FormModalStyle onSubmit={handleSubmit(handle)} noValidate>
        <div className="container_inputs_modalAdd">
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
            placeholder="Ano do Album"
          ></input>
          <div className="container_btns_add">
            <BtnModal onClick={() => setModal(false)}>Cancelar</BtnModal>
            <BtnModal type="submit">
              {loading ? "Enviando..." : "Enviar"}
            </BtnModal>
          </div>
        </div>
      </FormModalStyle>
    </DivContainerModal>
  );
};
