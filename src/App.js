import { Route, Routes } from "react-router-dom";
import { FilmsData } from "./data/films";

import FilmsLayout from "./components/FilmsLayout";

import Landing from "./pages/landing";

import "./index.css";

const films = FilmsData;

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/films" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/saved-films" element={ <FilmsLayout filmsList={films} /> } />
    </Routes>
  );
}

export default App;
