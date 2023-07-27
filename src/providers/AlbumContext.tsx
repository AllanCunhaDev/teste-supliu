import { createContext, useEffect, useState } from "react";
import { Api } from "../api/axios";


export const AlbumContext = createContext({});

export const AlbumProvider = ({ children } :any) => {

  const token = "allancunha20@hotmail.com";

  const [albuns, setAlbuns] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [delAlbum, setDelAlbum] = useState(false);

  const createAlbum = async (album: any) => {
    try {
      setLoading(true);
      const response = await Api.post("/album",album,{
        params: { name : "", year : ""},
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setAlbuns(response.data);
      setModal(false);
      console.log(response.data.detail);
    } catch (error) {
      console.error("Erro em criar um novo:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteAlbum = async (id : number) => {
    try {
      const response = await Api.delete(`/album/${id}`, {
        params: { id: id },
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setAlbuns(response.data);
      setDelAlbum(false);
    } catch (error) {
      console.error("Erro em criar um novo:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      const verify = async () => {
        try {
          const response = await Api.get("/album", {
            params: { keyword: "", limit: 10, page: 1 },
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          });
          // console.log(response.data.data);
          setAlbuns(response.data.data)
        } catch (error) {
          console.error("Erro na requisição:", error.message);
          throw error;
        }
      };
      verify();
    }
  }, []);

  return (
    <AlbumContext.Provider
      value={{
        albuns,
        setAlbuns,
        loading,
        setLoading,
        createAlbum,
        modal,
        setModal,
        deleteAlbum,
        delAlbum,
        setDelAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
