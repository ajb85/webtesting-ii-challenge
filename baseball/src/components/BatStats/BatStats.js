import React from "react";

function BatStats({ balls, strikes }) {
  return (
    <section>
      <div>
        <label>Strikes:</label>
        <span role="strikes">{strikes}</span>
      </div>
      <div>
        <label>Balls:</label>
        <span role="balls">{balls}</span>
      </div>
    </section>
  );
}

export default BatStats;
