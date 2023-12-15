import React, { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  // Initialize the puppies state with the puppyList array
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  return (
    <div className="root">
      <div className="card">
        {puppies.map((puppy) => {
          return (
            <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && featuredPup && (
        <div className="card">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>{" "}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
