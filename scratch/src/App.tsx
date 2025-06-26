import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Page/Navbar";
import { Footer } from "./components/Page/Footer";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
  //   const renderCount = useRef(0);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar></Navbar>

          <main className="flex-1 px-6 py-8">
            <TextEditor></TextEditor>
          </main>

          <Footer></Footer>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
