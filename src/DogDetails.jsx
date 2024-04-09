import React from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import "./DogDetails.css";

/** Component for a dog
 *
 * Props: dogs [{name, age, src, facts}, ...]
 *
 * Routelist -> {Doglist, DogDetails }
 */
function DogDetails({dogs}) {
  const {name} = useParams();
//  TODO: change to dog.name.toLowerCase
  const dog = dogs.filter((dog) => dog.src === name.toLowerCase())[0];

//   public folder means this doesn't need a filepath
  const pic = dog ? `/${dog.src}.jpg` : "";

  /**
   * Sets up dog details for rendering
   */
  function renderDogDetails() {
    return (
      <div>
        <h1>{dog.name}</h1>
        <img src={pic} alt="Picture of a dog" />
        <div className="DogDetails-facts">
          <h3>
            {/* TODO: map over facts, give each own line, will need key, use idx */}
            <i>Facts:</i> {dog.facts}
          </h3>
          <h3>
            <i>Age:</i> {dog.age}
          </h3>
        </div>

        <Link to={"/"}> Go Back </Link>
      </div>
    );
  }

  return (
    <div className="DogDetails">
      {!dog ? "This dog doesn't exist" : renderDogDetails()}
    </div>
  );
}

export default DogDetails;
