import React from "react";
import "./css/App.scss";

class App extends React.Component {
  state = { balls: 0, strikes: 0 };

  foulBall = () => {
    let strikes = this.state.strikes;
    if (strikes < 2) {
      strikes++;
      this.setState({ strikes });
    }
  };

  endBatter = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  countStrike = () => {
    let strikes = this.state.strikes;
    if (strikes < 2) {
      strikes++;
      this.setState({ strikes });
    } else {
      this.endBatter();
    }
  };

  countBall = () => {
    let balls = this.state.balls;
    if (balls < 3) {
      balls++;
      this.setState({ balls });
    } else {
      this.endBatter();
    }
  };

  render() {
    return (
      <div className="App">
        <section>
          <div>
            <label>Strikes: {this.state.strikes}</label>
          </div>
          <div>
            <label>Balls: {this.state.balls}</label>
          </div>
        </section>
        <section>
          <button onClick={() => this.countStrike()}>Strike</button>
          <button onClick={() => this.countBall()}>Ball</button>
          <button onClick={() => this.foulBall()}>Foul</button>
          <button onClick={() => this.endBatter()}>Hit</button>
        </section>
      </div>
    );
  }
}

export default App;
