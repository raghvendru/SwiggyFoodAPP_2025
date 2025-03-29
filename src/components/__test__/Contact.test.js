import Contact from "../Contact"
import {render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
describe("Should load cobtact us page",()=>{
    test("Should load contact us page component",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    })
    
    //test or it same
    it("Should test all input",()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
        
    
    })
})

