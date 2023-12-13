import React from "react";
import { Link } from "react-router-dom";

const BirdsType = ({ birdData }) => {
  console.log("BirdsType - birdData:", birdData);
  return (
    <div>
      <h2>Birds</h2>
      <div className="right">
      <Link to="/create" className="Add">
        Add a New bird
      </Link>
      <div className="bird-container">
        {birdData.map((bird, index) => (
          index % 2 === 0 ? (
            <div className="bird-row" key={index}>
              <Link to={`/bird/${bird.name}`}>
                <div>
                  {bird.name}
                  <img src={bird.image} alt="bird" />
                </div>
              </Link>
              {birdData[index + 1] && (
                <Link to={`/bird/${birdData[index + 1].name}`}>
                  <div>
                    {birdData[index + 1].name}
                    <img src={birdData[index + 1].image} alt="bird" />
                  </div>
                </Link>
              )}
            </div>
          ) : null
        ))}
      </div>
    </div>
    </div>
  );
};

export default BirdsType;





