import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomepageCards from "../components/HomepageCards";

describe("Cards Homepage", () => {
  it("renders card", () => {
    render(<HomepageCards />);

    const cards = screen.getByTestId("homepage-cards");
    expect(cards).toBeInTheDocument();
  });
});
