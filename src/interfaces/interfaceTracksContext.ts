import { ReactNode } from "react";


interface iTrack {
    album_id: number;
    number: number;
    title: string;
    duration: number;
}
interface iTrackResponse{
    tracks(tracks: any): undefined;
    data(data: any): undefined;
   
}

interface iPropsTracks {
    children: ReactNode;
}

interface iTrackContextData {
    tracks: any;
    setTracks: React.Dispatch<React.SetStateAction<undefined>>
    loadingTracks: boolean
    setLoadingTracks: React.Dispatch<React.SetStateAction<boolean>>
    
}

export type {
    iPropsTracks, iTrack, iTrackContextData, iTrackResponse
};
