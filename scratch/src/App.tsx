import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar></Navbar>
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 text-black dark:text-white min-h-screen">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            Hello World
          </div>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
