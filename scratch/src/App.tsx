import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar></Navbar>
        <div className="h-52 min-h-screen px-6 py-4">
          <h1>Hello world</h1>
          <Toolbar></Toolbar>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

const Test = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <div className="animate-fade-in">Fade in animation</div>
      <button
        onClick={() => {
          setButton(!button);
          alert("Button clicked!");
        }}
        disabled={button}
        aria-checked={button}
        title="Save your work"
        className="bg-blue-500 text-white hover:bg-blue-600 focus:bg-red-400 disabled:opacity-50 disabled:bg-green-500 rounded-2xl px-2 py-1"
      >
        Save
      </button>

      <input
        className="ms-3 "
        type="number"
        placeholder="Enter your name"
        readOnly={button}
        step="12"
        min="0"
        max="100"
      />
    </>
  );
};

export default App;
