import { render } from "@testing-library/react";
import Head from "../components/Head";
import "@testing-library/jest-dom";

describe("head", () => {
  it("renders logo", () => {
    render(<Head />);
    const logo = screen.getByRole("img", { name: "PCDS logo" });
    expect(logo).toBeInTheDocument();
  });
});
