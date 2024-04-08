import React, {useState} from "react";
import {Link} from "react-router-dom";
import DogDetails from "./DogDetails";

const DB_URL = "http://localhost:5001/dogs";

const INITIAL_STATE = await getDogs();

/** Component to render the list of dogs
 *
 * Props:
 * - None
 *
 * State:
 * - dogs -> Array of Objects with dog info. (e.g. [{name, age, src, facts},...])
 *
 * App -> Doglist -> DogDetails
 */
async function getDogs() {
  const response = await fetch(DB_URL);
  const data = await response.json();
  return data;
}

function Doglist() {
  const [dogs, setDogs] = useState(INITIAL_STATE);
  // renders list of dog components

  //   if (!dogs) {
  //     getDogs();
  //   }

  //   async function getDogs() {
  //     const response = await fetch(DB_URL);
  //     const data = await response.json();
  //     console.log("data: ", data);
  //     setDogs(data);
  //   }

  console.log("state: ", dogs);

  return (
    <div className="Doglist">
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Doglist;
