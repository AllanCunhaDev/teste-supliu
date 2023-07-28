import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { Api } from "../api/axios";
import { iPropsTracks, iTrack, iTrackContextData, iTrackResponse } from "../interfaces/interfaceTracksContext";

const TrackContext = createContext({} as iTrackContextData);

const TrackProvider = ({ children }: iPropsTracks) => {
  const token = "allancunha20@hotmail.com";

  const [tracks, setTracks] = useState();
  const [loadingTracks, setLoadingTracks] = useState(false);

  useEffect(() => {
    if (token) {
      const createTrack = async (track: iTrack) => {
        try {
          setLoadingTracks(true);
          const response : AxiosResponse<iTrackResponse> = await Api.get("track",{
            params:{album_id:track, number:track, title:track, duratio:track},
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
        } finally {
        }
        setLoadingTracks(false);
      };
      createTrack
    }
  }, []);

  return (
    <TrackContext.Provider
      value={{
        tracks,
        setTracks,
        loadingTracks,
        setLoadingTracks,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export { TrackContext, TrackProvider };
