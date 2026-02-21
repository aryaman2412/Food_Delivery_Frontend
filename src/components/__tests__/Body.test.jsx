import { fireEvent, screen } from "@testing-library/dom"
import Body from "../Body";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


describe("Body Component test cases",()=>{
    
    it("it should render the input box",()=>{
        render(    <BrowserRouter>
        <Body />
        </BrowserRouter>);
        const inputBox = screen.getByPlaceholderText("Enter the restaurant name");
        expect(inputBox).toBeInTheDocument();
    });

    it("should render Search Button",()=>{
        render(
                <BrowserRouter>
        <Body />
        </BrowserRouter>
        );
        const searchButton = screen.getByRole("button",{name:"Search"});
        expect(searchButton).toBeInTheDocument()
    });
    it("should render Search top rated restaurant button",()=>{
        render(
                <BrowserRouter>
        <Body />
        </BrowserRouter>
        );
        const topRatedButton = screen.getByRole("button",{name:"Top Rated Restaurants"});
        expect(topRatedButton).toBeInTheDocument()
    });

    it("Should render all the restaurants",()=>{
        render(
                <BrowserRouter>
        <Body />
        </BrowserRouter>
        );
        const restCard = screen.getAllByTestId("restaurant-card");
        expect(restCard.length).toBe(20);
    });
    it("Should render all the  top rated restaurants",()=>{
        render(
                <BrowserRouter>
        <Body />
        </BrowserRouter>
        );
        const topRatedButton = screen.getByRole("button",{name:"Top Rated Restaurants"});
        fireEvent.click(topRatedButton);
        const resCard =screen.getAllByTestId("restaurant-card");
        expect(resCard.length).toBe(15);
        });
    it("should render all the promoted restaurant",()=>{

 render(
                <BrowserRouter>
        <Body />
        </BrowserRouter>
        );
         const promotedResCard =screen.getAllByTestId("promoted-restaurant-card");
        expect(promotedResCard.length).toBe(4);
    });
});
