import React from "react";
import { render, cleanup } from "react-testing-library";

import "jest-dom/extend-expect";

afterEach(cleanup);

import BatStats from "./BatStats.js";

describe("<BatStats/>", () => {
  it("Should have balls and strikes as a number", () => {
    const { getByRole } = render(<BatStats />);
    const strikes = getByRole("strikes");
    const balls = getByRole("balls");

    expect(strikes).toBeInTheDocument();
    expect(balls).toBeInTheDocument();
  });
});
