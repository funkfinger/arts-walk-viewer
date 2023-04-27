import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("contains welcome message", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Welcome to PCDS Arts Walk\!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
