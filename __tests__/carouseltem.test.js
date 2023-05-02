import { render, screen } from "@testing-library/react";
import CarouselItem from "../components/carouselItem";
import "@testing-library/jest-dom";

describe("carousel items", () => {
  it("renders carousel item", () => {
    const project = {
      id: 0,
      link: "",
      title: "",
      img: "/",
    };
    render(<CarouselItem project={project} />);
    const item = screen.getByRole("link", { alt: /open project/i });
    expect(item).toBeInTheDocument();
  });
});
