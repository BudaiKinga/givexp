import "./App.css";
import Fullsite from "./components/Fullsite/Fullsite";

function App() {
  const isMobile = window.innerWidth < 1_000;
  localStorage.setItem("isMobile", isMobile);

  return (
    <div className="app">
      <Fullsite />
    </div>
  );
}

export default App;
