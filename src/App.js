import { Route, Routes } from "react-router-dom";
import { FilmsData } from "./data/films";

import Account from "./pages/account";
import Landing from "./pages/landing";
import FilmsLayout from "./components/FilmsLayout";

import "./index.css";
import Auth from "./pages/(auth)/auth";

const films = FilmsData;

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/films" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/saved-films" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/account" element={ <Account /> } />
      <Route path="/auth" element={ <Auth /> } />
    </Routes>
  );
}

export default App;
