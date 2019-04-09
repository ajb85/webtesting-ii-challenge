import React from "react";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

import BatStats from "./BatStats.js";

describe("<BatStats/>", () => {
  it("Should have balls and strikes", () => {
    const { getByRole } = render(<BatStats />);
    getByRole("strikes");
    getByRole("balls");
  });
});
