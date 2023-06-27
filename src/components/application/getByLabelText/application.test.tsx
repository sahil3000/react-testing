import { render, screen } from "@testing-library/react";
import { Application } from "../Application";


describe("Application Component : Test by getByLabelText", () => {
    it("render correctly", () => {
        render(<Application/>)

        const inputTextElement = screen.getByLabelText("Name");
        expect(inputTextElement).toBeInTheDocument();

        const textAreaElement = screen.getByLabelText("Bio");
        expect(textAreaElement).toBeInTheDocument();
        
        const selectboxElement = screen.getByLabelText("Job Location");
        expect(selectboxElement).toBeInTheDocument();

        const checkboxElement = screen.getByLabelText("I agree to the terms and conditions");
        expect(checkboxElement).toBeInTheDocument();

    });
});