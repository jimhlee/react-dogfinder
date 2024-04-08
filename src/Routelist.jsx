import React from "react";
import {Route, Routes} from "react-router-dom";

import Doglist from "./Doglist";
import DogDetails from "./DogDetails";
// import dogs from db.json

function Routelist() {
  return (
    <Routes>
      <Route element={<Doglist />} path="/dogs" />
      <Route element={<DogDetails />} path="/dogs/:name" />
    </Routes>
  );
}

export default Routelist;
