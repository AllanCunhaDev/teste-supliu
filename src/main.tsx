import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AlbumProvider } from "./providers/AlbumContext.tsx";
import { TrackProvider } from "./providers/TracksContext.tsx";
import { GlobalStyle } from "./style/Global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AlbumProvider>
      <TrackProvider>
        <App />
      </TrackProvider>
    </AlbumProvider>
  </React.StrictMode>
);
