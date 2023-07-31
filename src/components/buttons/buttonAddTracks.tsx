import { useContext } from "react";
import { iBtnAddTrackProps } from "../../interfaces/interfaceTracksContext";
import { AlbumContext } from "../../providers/AlbumContext";
import { TrackContext } from "../../providers/TracksContext";

export const BtnAddTracks = ({ album, tracks }: iBtnAddTrackProps) => {
  const { setAlbumId } = useContext(AlbumContext);
  const { setModalTracks } = useContext(TrackContext);

  const addNewTrack = () => {
    if (album) {
      setAlbumId(album.id);
    }
    if (tracks) {
      setAlbumId(tracks.id);
    }
    setModalTracks(true);
  };

  return <button onClick={addNewTrack}>+</button>;
};
