import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

describe("Does App.js render", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should increase strike count", () => {
    const { getByText } = render(<App />);

    const button = getByText("Strike");
    fireEvent.click(button);
    getByText("Strikes: 1");

    fireEvent.click(button);
    getByText("Strikes: 2");

    fireEvent.click(button);
    getByText("Strikes: 0");
  });
});

/*
import React from "react";
import { render, cleanup } from "react-testing-library";

import "jest-dom/extend-expect";

afterEach(cleanup);

import BatStats from "./BatStats.js";

describe("<BatStats/>", () => {
  it("Should have balls and strikes as props numbers", () => {
    const { getByText } = render(<BatStats strikes={0} balls={1} />);
    getByText("Strikes: 0");
    getByText("Balls: 1");
  });
});
*/
