import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("it renders Contact Page", () => {
  render(<Contact />);
  //Queryinig
  const heading = screen.getByText("Contact Us");
  //Assertion 
  expect(heading).toBeInTheDocument();
});
