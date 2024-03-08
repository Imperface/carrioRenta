import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "src/App.jsx";
import { ThemeProvider } from "styled-components";

const theme = {
  accent: "#3470ff",
  accentHover: "#0b44cd",
  main: "#121417",
  mainRevers: "#FFFFFF",
  mainHover: "#fff",
  secondary: "#8A8A89",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/carrioRenta">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
