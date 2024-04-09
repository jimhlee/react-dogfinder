import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routelist from "./Routelist";
import "./App.css";

const DB_URL = "http://localhost:5001/dogs";

// TODO: Fetch data should go inside App component function

/** Top level component which fetches data from API
 * Props: none
 * State: dogs [{name, age, src, facts}, ...]
*
* App -> Routelist
*/
function App() {
  // TODO: combine dogs and isloading into an object
  // if setting 2 pieces of state at same time, better
  const [dogs, setDogs] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  /** Fetches dog data from API */
  async function getDogs() {
    const response = await fetch(DB_URL);
    const data = await response.json();
    setDogs(data);
    setIsLoading(false)
  }

  if(isLoading) {
    getDogs()
    return <div> Loading Dogs... </div>
  }

  return (
    <BrowserRouter>
      <Routelist dogs={dogs} />
    </BrowserRouter>
  );
}

export default App;
