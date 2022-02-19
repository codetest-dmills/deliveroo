import { render, screen } from "@testing-library/react";

// Component
import Header from "./Header";

const PROPS = {
  location: "Fitzrovia",
};

describe("Header", () => {
  const setup = () => render(<Header {...PROPS} data-testid="header" />);

  it("renders", () => {
    setup();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  })

  test("Location name correctly shows", () => {
    setup();
    expect(screen.getByText(PROPS.location)).toBeInTheDocument();
  })
});
