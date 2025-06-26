import "./App.css";
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
        <main className=" flex flex-col">
          <div className="flex-1 px-6 py-8">
            <TextEditor></TextEditor>
          </div>
          <Footer></Footer>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
