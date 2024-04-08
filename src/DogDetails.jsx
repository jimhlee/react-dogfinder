import React from "react";
import { useParams } from "react-router-dom";


/** Component for a dog
 *
 * Props: details {age, src, facts}
 *
 */
function DogDetails({ details }) {
    const { name } = useParams;
    const { fact, src, age } = details;
    const pic = `/public/${name}`;

    return (
        <div className="dogDetails">
            <h1>{name}</h1>
            <img src={pic} alt="Picture of a dog" />
            <h3>{fact}</h3>
        </div>

    );
}

export default DogDetails;