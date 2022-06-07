import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        </div>
    </div>
  );
}

export default App;
