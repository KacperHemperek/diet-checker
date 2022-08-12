import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";
import { renderWithProviders } from "./RenderWithProviders";
import HomepageCards from "../components/HomepageCards";

describe("Cards Homepage", () => {
  it("renders unchanged", () => {
    const { container } = renderWithProviders(<Home />);

    expect(container).toMatchSnapshot();
  });
  it("renders card component on homepage", () => {
    render(<HomepageCards />);

    const cards = screen.getByTestId("homepage-cards");

    expect(cards).toBeInTheDocument();
  });
});
