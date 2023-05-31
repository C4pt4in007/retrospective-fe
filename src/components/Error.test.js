import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "./Error";

test("test h1 text is present", () => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();
  const linkElements = headerElement.querySelectorAll("li");
  expect(linkElements.length).toBe(3);
  expect(
    screen.getByText("No Retrospective, please create one")
  ).toBeInTheDocument();
});
