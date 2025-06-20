import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar></Navbar>
        <h1>Hello world</h1>
        <div className="animate-fade-in">Fade in animation</div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
