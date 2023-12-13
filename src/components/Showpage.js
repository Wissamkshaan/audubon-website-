import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const Showpage = ({ birdData }) => {
  const { name:birdName } = useParams();
  console.log("birdData:", birdData);

  const bird = birdData.find((bird) => bird.name === birdName);

  // checking If bird is not found or is undefined
  if (!bird) {
    console.error(`Bird not found for name: ${birdName}`);
    return <Navigate to="/" />;
  }

 
  const { image, name, genus, conservationStatus, homepage } = bird;

  return (
    <div className="show">
     
      {image ? (
        <img src={image} alt="pic" />
      ) : (
        <p>No image available for {name}</p>
      )}
      <div className="show-content">
        <h2>{name}</h2>
        <h3>({genus})</h3>
        <h3>Conservation Status</h3>
        <h4>{conservationStatus}</h4>
       
        {homepage ? (
          <a href={homepage} className="read-more">
            Read More
          </a>
        ) : (
          <p>No homepage available for {name}</p>
        )}
      </div>
    </div>
  );
};

export default Showpage;
