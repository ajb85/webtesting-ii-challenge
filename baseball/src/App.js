import React, { useState } from "react";
import "./css/App.scss";

import BatStats from "./components/BatStats";
import StatButtons from "./components/StatButtons";

function App(props) {
  const ballState = useState(0);
  const strikeState = useState(0);

  return (
    <div className="App">
      <BatStats balls={ballState[0]} strikes={strikeState[0]} />
      <StatButtons ballState={ballState} strikeState={strikeState} />
    </div>
  );
}

export default App;
