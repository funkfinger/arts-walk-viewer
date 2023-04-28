import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import "@testing-library/jest-dom";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("contains welcome message", () => {
    render(<Index />);
    const heading = screen.getByText(/Welcome to PCDS Arts Walk\!/i);
    expect(heading).toBeInTheDocument();
  });
});
