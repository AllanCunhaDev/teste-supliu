import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { Api } from "../api/axios";
import { iAlbumContextData, iAlbuns, iProps } from "../interfaces/interfaceAlbumContext";

export const AlbumContext = createContext({} as iAlbumContextData);

export const AlbumProvider = ({ children }: iProps) => {
  const token = "allancunha20@hotmail.com";

  const [albuns, setAlbuns] = useState<iAlbuns[]>([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [filterAlbuns, setFilterAlbuns] = useState("");

  const createAlbum = async (album: any) => {
    try {
      setLoading(true);
      const response = await Api.post("/album", album, {
        params: { name: "", year: "" },
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setAlbuns(response.data);
      setModal(false);
    } catch (error) {
      console.error("Erro em criar um novo:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteAlbum = async (id: number) => {
    try {
      setLoading(true);
      const response: AxiosResponse<any, any> = await Api.delete(
        `/album/${id}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      setAlbuns(response.data);
    } catch (error) {
      console.error("Erro em excluir o álbum:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      const verify = async () => {
        try {
          setLoading(true);
          const response = await Api.get("/album", {
            params: { keyword: filterAlbuns, limit: 10, page: 1 },
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          });
          setAlbuns(response.data.data);
        } catch (error) {
          console.error("Erro na requisição:", error);
          throw error;
        } finally {
          setLoading(false);
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
        filterAlbuns,
        setFilterAlbuns
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
