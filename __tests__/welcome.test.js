import { render, screen } from "@testing-library/react";
import Welcome from "../components/welcome";
import "@testing-library/jest-dom";

describe("welcome", () => {
  it("renders a heading", () => {
    render(<Welcome />);
    const welcome = screen.getByRole("heading", { level: 1 });
    expect(welcome).toBeInTheDocument();
  });
});
