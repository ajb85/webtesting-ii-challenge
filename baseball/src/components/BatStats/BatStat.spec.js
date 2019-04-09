import React from "react";
import { render, cleanup } from "react-testing-library";

import "jest-dom/extend-expect";

afterEach(cleanup);

import BatStats from "./BatStats.js";

describe("<BatStats/>", () => {
  it("Should have balls and strikes", () => {
    const { getByRole } = render(<BatStats strikes={0} balls={1} />);
    const strikes = getByRole("strikes");
    const balls = getByRole("balls");

    expect(strikes).toBeInTheDocument();
    expect(balls).toBeInTheDocument();

    expect(strikes).toHaveTextContent(0);
    expect(balls).toHaveTextContent(1);
  });
});
