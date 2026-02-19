import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import HeadingComponent from "../HeadingComponent";
import { BrowserRouter } from "react-router-dom";

it("should render headingComponent with Login button",()=>{
    render(
    <BrowserRouter>
    <HeadingComponent/>
    </BrowserRouter>);

const loginButton = screen.getByRole("button");
expect(loginButton).toBeInTheDocument();
});


 