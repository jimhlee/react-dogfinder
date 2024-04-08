import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


/** Component for a dog
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * Routelist -> {Doglist, DogDetails }
 */
function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.filter(dog => dog.name === name)[0];
    console.log(dog)

    // TODO: write a not found component
    if (!dog) {
        navigate('/NotFound')
    }
    const pic = `../public/${src}.jpg`;

    return (
        <div className="dogDetails">
            <h1>{name}</h1>
            <img src={pic} alt="Picture of a dog" />
            <h3>{facts}</h3>
            <h3>{age}</h3>
            <Link to={'/'} > Go Back </Link>
        </div>

    );
}

export default DogDetails;