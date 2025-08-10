import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Fullsite from "./components/Fullsite/Fullsite";

function App() {
  const isMobile = window.innerWidth < 1_000;
  localStorage.setItem("isMobile", isMobile);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fullsite />}>
          {/* <Route path="xp/:category/:partner" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
