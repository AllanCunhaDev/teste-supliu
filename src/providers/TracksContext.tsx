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
      const response = await Api.post("/track",track,{
        params: {track},
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setTracks(response.data.tracks);
      console.log(response.data.tracks);
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
        setModalTracks
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export { TrackContext, TrackProvider };
