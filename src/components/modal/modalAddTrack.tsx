import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AlbumContext } from "../../providers/AlbumContext";
import { TrackContext } from "../../providers/TracksContext";
import { BtnModal } from "../buttons/buttonModalAdd";
import { DivContainerModal, FormModalStyle } from "./styleModalAdd";

const AddTrackModal = () => {
  const { createTracks, loadingTracks, setModalTracks } =
    useContext(TrackContext);

  const { albumId } = useContext(AlbumContext);

  const { handleSubmit, reset, register } = useForm();

  let newTrack = {
    album_id: 0,
    number: 0,
    title: "",
    duration: 0,
  };

  const handle = (param: any) => {
    newTrack = {
      album_id: Number(albumId),
      number: Number(param.number),
      title: param.title,
      duration: Number(param.duration),
    };
    createTracks(newTrack);
    reset();
  };

  return (
    <DivContainerModal>
      <FormModalStyle onSubmit={handleSubmit(handle)}>
        <div className="container_track_inputs" {...register("id")}>
          <input type="number" {...register("number")} placeholder="Número da Faixa"/>

          <input type="text" {...register("title")}  placeholder="Nome da Faixa"/>

          <input type="number" {...register("duration")}  placeholder="Duração da Faixa"/>

          <div className="container_btn_add_track">
            <BtnModal  type="submit">
              {loadingTracks ? "Enviando Faixa..." : "Enviar Faixa" }
            </BtnModal>
            <BtnModal onClick={() => setModalTracks(false)}>Cancelar</BtnModal>
          </div>
        </div>
      </FormModalStyle>
    </DivContainerModal>
  );
};

export { AddTrackModal };
