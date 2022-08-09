import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import AppWrapper from "../app-wrappers/AppWrapper";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <AppWrapper>
        <Home />
      </AppWrapper>
    );

    const main = screen.getByTestId("main");

    expect(main).toBeInTheDocument();
  });
});
