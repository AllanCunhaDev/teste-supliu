import { ReactNode } from "react";
import { iAlbuns } from "./interfaceAlbumContext";


interface iTrack {
    album_id: number;
    number: number;
    title: string;
    duration: number;

}

interface iTrackTableProps {
    tracks: iTrack[];
}

interface iTrackResponse {
    tracks: any | []
    setTracks: React.Dispatch<React.SetStateAction<never[]>>

}

interface iPropsTracks {
    children: ReactNode;
}

interface iTrackContextData {
    tracks: any | iTrack[];
    setTracks: React.Dispatch<React.SetStateAction<undefined>>
    loadingTracks: boolean
    setLoadingTracks: React.Dispatch<React.SetStateAction<boolean>>
    createTracks: (track: iTrack) => Promise<void>
    modalTracks: boolean
    setModalTracks: React.Dispatch<React.SetStateAction<boolean>>
    deleteTracks: (id: number) => Promise<void>

}

interface iBtnAddTrackProps {
    album?: iAlbuns;
    tracks?: any;
}

export type {
    iBtnAddTrackProps, iPropsTracks,
    iTrack,
    iTrackContextData,
    iTrackResponse,
    iTrackTableProps
};

