import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("render links in header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText("GetAllRetrospective")).toBeInTheDocument();  
  expect(screen.getByText("GetRetrospectiveByDate")).toBeInTheDocument();
  expect(screen.getByText("CreateRetrospective")).toBeInTheDocument();
});