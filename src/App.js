import { Route, Routes } from "react-router-dom";
import { FilmsData } from "./data/films";

import Account from "./pages/account";
import Landing from "./pages/landing";
import Auth from "./pages/(auth)/auth";
import NotFoundPage from "./pages/404";
import Register from "./pages/(auth)/register";
import FilmsLayout from "./components/FilmsLayout";

import "./index.css";

const films = FilmsData;

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/films" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/saved-films" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/account" element={ <Account /> } />
      <Route path="/auth" element={ <Auth /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/404" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
