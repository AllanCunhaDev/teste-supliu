import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AlbumProvider } from "./providers/AlbumContext.tsx";
import { GlobalStyle } from "./style/Global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AlbumProvider>
      <App />
    </AlbumProvider>
  </React.StrictMode>
);
