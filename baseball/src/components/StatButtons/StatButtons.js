import React from "react";

function StatButtons({ ballState, strikeState }) {
  const [balls, setBalls] = ballState;
  const [strikes, setStrikes] = strikeState;

  const foulBall = () => {
    if (strikes < 2) setStrikes(strikes + 1);
  };

  const endBatter = () => {
    setBalls(0);
    setStrikes(0);
  };

  const countStrike = () => {
    strikes < 2 ? setStrikes(strikes + 1) : endBatter();
  };

  const countBall = () => {
    balls < 3 ? setBalls(balls + 1) : endBatter();
  };

  return (
    <section>
      <button onClick={() => countStrike()}>Strike</button>
      <button onClick={() => countBall()}>Ball</button>
      <button onClick={() => foulBall()}>Foul</button>
      <button onClick={() => endBatter()}>Hit</button>
    </section>
  );
}

export default StatButtons;
