import React, { useState } from "react";

const Addbird = ({ birdData, setBirdData }) => {
  const [newBird, setNewBird] = useState({
    name: "",
    genus: "",
    image: "",
    homepage: "",
    conservationStatus: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBird({ ...newBird, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("Submitting:", newBird);
    e.preventDefault();
    setBirdData((prevBirds) => [...prevBirds, newBird]);
    console.log("Updated birdData:", birdData);
    setNewBird({
      name: "",
      genus: "",
      image: "",
      homepage: "",
      conservationStatus: ""
    });
  };

  return (
    <div className="form-container">
    <h2>Add a new Bird</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Bird's Name
          <input
            type="text"
            name="name"
            value={newBird.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Genus
          <input
            type="text"
            name="genus"
            value={newBird.genus}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Image URL
          <input
            type="text"
            name="image"
            value={newBird.image}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Homepage
          <input
            type="text"
            name="homepage"
            value={newBird.homepage}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Conservation Status
          <input
            type="text"
            name="conservationStatus"
            value={newBird.conservationStatus}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  );
};

export default Addbird;
