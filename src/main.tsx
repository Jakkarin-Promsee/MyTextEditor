import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextEditor from "./components/TextEditor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TextEditor />
  </StrictMode>
);
