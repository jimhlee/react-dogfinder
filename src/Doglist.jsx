import React from "react";
import {Link} from "react-router-dom";

import "./Doglist.css";

/** Component to render the list of dogs
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * Routelist -> {Doglist, DogDetails }
 */
function Doglist({dogs}) {
  return (
    <div className="Doglist">
      <h1>Dog List</h1>
      <ul className="Doglist-list">
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              <div className="Doglist-link">{dog.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Doglist;
