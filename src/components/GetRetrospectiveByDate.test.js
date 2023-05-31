import { render, screen } from "@testing-library/react";
import GetRetrospectiveByDate from "./GetRetrospectiveByDate";
test("test if date and button is rendered", () => {
  render(<GetRetrospectiveByDate />);

  expect(screen.getByText("Date")).toBeInTheDocument();
  expect(screen.getByText("Get Retrospectives")).toBeInTheDocument();
  expect(screen.getByTestId("retro-form")).toBeInTheDocument();
});
