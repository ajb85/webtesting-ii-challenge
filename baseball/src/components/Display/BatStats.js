import React from "react";

function BatStats({ balls, strikes }) {
  return (
    <section>
      <div>
        <label>Strikes: {strikes}</label>
      </div>
      <div>
        <label>Balls: {balls}</label>
      </div>
    </section>
  );
}

export default BatStats;
