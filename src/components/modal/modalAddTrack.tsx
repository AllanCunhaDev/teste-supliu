import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TrackContext } from "../../providers/TracksContext";

const AddTrackModal = () => {
  const { tracks, createTracks, loadingTracks, setModalTracks } =
    useContext(TrackContext);

  const { handleSubmit, reset, register } = useForm();

  const handle = (param: any) => {
    createTracks(param);
    reset();
  };

  return (
    <div>
      <h3>Adicionar Nova Faixa</h3>
      <form onSubmit={handleSubmit(handle)}>
        <label>
          Número da Faixa:
          <input type="text" {...register("number")} />
        </label>
        <label>
          Título da Faixa:
          <input type="text" {...register("title")} />
        </label>
        <label>
          Duração da Faixa:
          <input
            type="text"
            {...register("duration")}
          />
        </label>
        <button type="submit">
          {loadingTracks ? "Enviando Faixa..." : "Enviar Faixa"}
        </button>
        <button onClick={() => setModalTracks(false)}>Cancelar</button>
      </form>
    </div>
  );
};

export { AddTrackModal };
