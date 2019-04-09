import React from "react";

function BatStats({ balls, strikes }) {
  return (
    <section>
      <div>
        <label>Strikes:</label>
        <span>{strikes}</span>
      </div>
      <div>
        <label>Balls:</label>
        <span>{balls}</span>
      </div>
    </section>
  );
}

export default BatStats;
