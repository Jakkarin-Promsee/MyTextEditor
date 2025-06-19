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
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
