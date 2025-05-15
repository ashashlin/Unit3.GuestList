import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GuestProvider } from "./context/GuestContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestProvider>
      <App />
    </GuestProvider>
  </StrictMode>
);
