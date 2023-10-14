import {Route, Routes} from "react-router-dom";

import Main from "./pages/main";
import Landing from "./pages/landing";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/main" element={ <Main /> } />
    </Routes>
  );
}

export default App;
