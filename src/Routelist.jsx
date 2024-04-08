import React from "react";
// import dogs from db.json

function Routelist() {
    return (
        <Routes>
          <Route element= { <DogList dogs={}/>} path="/dogs" />
          <Route element= { <DogDetails />} path="/dogs/:name" />
        </Routes>
      );
}