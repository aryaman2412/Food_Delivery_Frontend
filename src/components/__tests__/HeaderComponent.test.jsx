import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
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

it("should have home Button",()=>{
    render(
        <BrowserRouter>
        <HeadingComponent/>
        </BrowserRouter>);
    const homeButton = screen.getByText("Home");
    
    expect(homeButton).toBeInTheDocument;
});
it("should have about us Button",()=>{
    render(
        <BrowserRouter>
        <HeadingComponent/>
        </BrowserRouter>);
    const aboutusButton = screen.getByText("About Us");
    expect(aboutusButton).toBeInTheDocument;
});
it("should have contact us Button",()=>{
    render(
        <BrowserRouter>
        <HeadingComponent/>
        </BrowserRouter>);
    const contactusbutton = screen.getByText("Contact Us");
    expect(contactusbutton).toBeInTheDocument;
});
