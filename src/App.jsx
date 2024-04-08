import {BrowserRouter, Route, Routes} from "react-router-dom";

import Routelist from "./Routelist";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routelist />
    </BrowserRouter>
  );
}

export default App;
