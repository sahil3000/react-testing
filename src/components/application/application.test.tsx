import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Aplication Component", () => {
    it("render correctly", () => {
        render(<Application/>)

        const h1Element = screen.getByRole('heading', {
            level: 1
        });
        expect(h1Element).toBeInTheDocument();

        const h2Element = screen.getByRole('heading', {
            level: 2
        });
        expect(h2Element).toBeInTheDocument();

        const inputTextElement = screen.getByRole('textbox',{
            name: 'Name'
        });
        expect(inputTextElement).toBeInTheDocument();

        const bioTextAreaElement = screen.getByRole('textbox',{
            name: 'Bio'
        });
        expect(bioTextAreaElement).toBeInTheDocument();

        const selectboxElement = screen.getByRole('combobox');
        expect(selectboxElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })
})