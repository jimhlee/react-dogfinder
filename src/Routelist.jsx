import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Doglist from "./Doglist";
import DogDetails from "./DogDetails";

/** Main routes
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * App -> Routelist -> {Doglist, DogDetails }
*/
function Routelist({ dogs }) {
    return (
        <Routes>
            <Route element={<Doglist dogs={dogs} />} path="/dogs" />
            <Route element={<DogDetails dogs={dogs} />} path="/dogs/:name" />
            <Route path="*" element={<Navigate to="/dogs" /> } />
        </Routes>
    );
}

export default Routelist;
