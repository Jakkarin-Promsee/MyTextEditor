import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Page/Navbar";
import { Footer } from "./components/Page/Footer";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
  //   const renderCount = useRef(0);
  return (
    <>
      <ThemeProvider>
        <Navbar></Navbar>
        <div className="min-h-screen px-6 py-4">
          <TextEditor></TextEditor>
        </div>

        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
