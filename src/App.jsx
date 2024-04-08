import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Routelist from "./Routelist";
import "./App.css";

const DB_URL = "http://localhost:5001/dogs";
const INITIAL_STATE = await getDogs();

// TODO: Fetch data should go inside App component function
/** Fetches dog data from API */
async function getDogs() {
  const response = await fetch(DB_URL);
  const data = await response.json();
  return data;
}

/** Top level component which fetches data from API
 * Props: none
 * State: dogs [{name, age, src, facts}, ...]
 *
 * App -> Routelist
 */
function App() {
  const [dogs, setDogs] = useState(INITIAL_STATE);

  return (
    <BrowserRouter>
      <Routelist dogs={dogs} />
    </BrowserRouter>
  );
}

export default App;
