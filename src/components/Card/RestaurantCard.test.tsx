import { render, screen } from "@testing-library/react";

// Component
import RestaurantCard from "./RestaurantCard";

const PROPS = {
  id: "123",
  name: "<TEST RESTAURANT>",
  tags: ["Salads", "Gluten free"],
  price: 2,
  image: "",
  url: ""
}

describe("<RestaurantCard />", () => {
  const setup = () => render(<RestaurantCard restaurant={PROPS} data-testid="card" />);

  test("Card renders", () => {
    setup();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  })

  test("Restaurant name is present", () => {
    setup();
    expect(screen.getByText(PROPS.name, { })).toBeInTheDocument();
  })

  test("Tags render", () => {
    setup();
    expect(screen.getByText(PROPS.tags[0])).toBeInTheDocument();
    expect(screen.getByText(PROPS.tags[1])).toBeInTheDocument();
  })

  test("Price resolves to correct number of pound signs", () => {
    setup();
    expect(screen.getByText("££")).toBeInTheDocument();
  })
})
