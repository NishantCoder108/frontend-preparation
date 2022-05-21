import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Concrete from "./pages/concrete/Concrete";
import CyberLawEthics from "./pages/CyberLawEthics";
import FoundationEngineering from "./pages/FoundationEngineering";
import Pple from "./pages/Pple";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/concrete-technology" element={<Concrete />} />
        <Route
          path="/foundation-engineering"
          element={<FoundationEngineering />}
        />
        <Route path="/pple" element={<Pple />} />
        <Route path="/cyber-law-ethics" element={<CyberLawEthics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
