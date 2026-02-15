import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("it renders Contact Page", () => {
  render(<Contact />);
  
  const heading = screen.getByText("Contact Us");
  expect(heading).toBeInTheDocument();
});
