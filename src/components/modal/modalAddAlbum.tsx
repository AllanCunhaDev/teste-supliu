import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AlbumContext } from "../../providers/AlbumContext";
import { BtnModal } from "../buttons/buttonModalAdd";
import { InputModal } from "../inputs/inputModal";
import { DivContainerModal } from "./styleModalAdd";

export const ModalAdicionar = () => {
  const { setModal, createAlbum, loading } = useContext(AlbumContext);

  const { handleSubmit, reset, register } = useForm();

  const handle = (param) => {
    console.log(param);
    createAlbum(param);
    reset();
  };

  return (
    <DivContainerModal>
      <form onSubmit={handleSubmit(handle)} noValidate>
        <div>
          <InputModal
            id="name"
            name="name"
            {...register("name")}
            type="text"
            placeholder="Titulo do Album"
          ></InputModal>
          <InputModal
            id="year"
            name="year"
            {...register("year")}
            type="number"
            label="Ano"
            placeholder="ano"
          ></InputModal>
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