import { ReactNode } from "react"

interface iAlbuns {
    id?: number | any,
    name: string,
    year: number,
    tracks: [],
    filterAlbuns : [] | iAlbuns,

}


interface iProps {
    children: ReactNode
}

interface iAlbumContextData {
    albuns: any
    setAlbuns: React.Dispatch<React.SetStateAction<any>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    createAlbum: (album: any) => Promise<void>
    deleteAlbum: (id: number) => Promise<void>
    filterAlbuns: string
    setFilterAlbuns: React.Dispatch<React.SetStateAction<string>>
    albumId: any
    setAlbumId: React.Dispatch<React.SetStateAction<any>>
}

export type { iAlbumContextData, iAlbuns, iProps }

