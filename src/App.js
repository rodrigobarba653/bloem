import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import BioPha from "./pages/BioPha";
import ErrorPage from "./pages/ErrorPage";
import PureSyn from "./components/PureSyn/PureSyn";
import GrowMate from "./components/GrowMate/GrowMate";

function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/biopharmaceutical" element={<BioPha />}></Route>
          <Route path="/pure-syncore" element={<PureSyn />}></Route>
          <Route path="/growmate" element={<GrowMate />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route exact path="/#location"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
