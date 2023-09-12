import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainNav from "./components/Nav/MainNav";
import Home from "./pages/Home";
import About from "./pages/About";
import BioPha from "./pages/BioPha";
import ErrorPage from "./pages/ErrorPage";
import PureSynCo from "./pages/PureSyn";
import GrowMateCo from "./pages/Growmate";

function App() {
  return (
    <div id="app">
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/biopharmaceutical" element={<BioPha />}></Route>
          <Route path="/pure-syncore" element={<PureSynCo />}></Route>
          <Route path="/growmate" element={<GrowMateCo />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route exact path="/#location"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
