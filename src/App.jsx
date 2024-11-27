import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
import Output from "./components/Output";

function App() {
  return (
    <div className="bg-violet-900 h-screen w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <CodeEditor/>
      
    </div>
  );
}

export default App;