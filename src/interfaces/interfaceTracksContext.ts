import { ReactNode } from "react";


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
    tracks: any;
    setTracks: React.Dispatch<React.SetStateAction<undefined>>
    loadingTracks: boolean
    setLoadingTracks: React.Dispatch<React.SetStateAction<boolean>>
    createTracks: (track: iTrack) => Promise<void>
    modalTracks: boolean
    setModalTracks: React.Dispatch<React.SetStateAction<boolean>>

}

export type {
    iPropsTracks, iTrack, iTrackContextData, iTrackResponse, iTrackTableProps
};
