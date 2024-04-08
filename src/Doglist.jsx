import React from "react";
import DogDetails from "./DogDetails";


function Doglist({ dogs }) {
    // renders list of dog components

    return (
        <div className="Doglist">
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{DogDetails}</Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}