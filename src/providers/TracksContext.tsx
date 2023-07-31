import { createContext, useState } from "react";
import { Api } from "../api/axios";
import { iPropsTracks, iTrack, iTrackContextData } from "../interfaces/interfaceTracksContext";

const TrackContext = createContext({} as iTrackContextData);

const TrackProvider = ({ children }: iPropsTracks) => {
  const token = "allancunha20@hotmail.com";

  const [tracks, setTracks] = useState();
  const [loadingTracks, setLoadingTracks] = useState(false);
  const [modalTracks, setModalTracks] = useState(false);

  const createTracks = async (track : iTrack)=>{
    try {
      setLoadingTracks(true);
      const response = await Api.post("/track", track,{
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setTracks(response.data.tracks);
      setModalTracks(false);
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }finally{
      setLoadingTracks(false);
    }
  }

  const deleteTracks = async (id:number)=>{
    setLoadingTracks(true)
    try {
      const response = await Api.delete(`/track/${id}`,{
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setTracks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }finally{
      setLoadingTracks(false);
    }
  }

  return (
    <TrackContext.Provider
      value={{
        tracks,
        setTracks,
        loadingTracks,
        setLoadingTracks,
        createTracks,
        modalTracks,
        setModalTracks,
        deleteTracks,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export { TrackContext, TrackProvider };
