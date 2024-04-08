import React from "react";
import { Link } from "react-router-dom";

/** Component to render the list of dogs
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * Routelist -> {Doglist, DogDetails }
 */
function Doglist({ dogs }) {

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
