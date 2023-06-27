import { render, screen } from "@testing-library/react";
import { AllCase } from "./allCase";

describe("All Test cases Component", () => {
    it("is render correctly", () => {
        render(<AllCase/>)

        const inputElement = screen.getByPlaceholderText('Enter Name');
        expect(inputElement).toBeInTheDocument();
        
        // used for div, span, paragraph tags
        const h1Element = screen.getByText("Job Form");
        expect(h1Element).toBeInTheDocument();
        
        // used with value fields in input tags
        const emailElement = screen.getByDisplayValue("test@test.com");
        expect(emailElement).toBeInTheDocument();
        
        // used for img, input, area, custom html element
        const imageElement = screen.getByAltText('sample-image');
        expect(imageElement).toBeInTheDocument();
        
        // worked only with title attribute
        const spanElement = screen.getByTitle("sample-title");
        expect(spanElement).toBeInTheDocument();
        
        const paragraphElement = screen.getByTestId("sample-test-id");
        expect(paragraphElement).toBeInTheDocument();
    });
});