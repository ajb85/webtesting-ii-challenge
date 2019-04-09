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
