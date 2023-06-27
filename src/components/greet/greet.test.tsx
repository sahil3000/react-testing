import { render, screen } from "@testing-library/react"
import { Greet } from "."


describe("Greet Component", () => {
    test("rendering correctly", () => {
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument()
    })

    test("rendering correctly with name props", () => {
        render(<Greet name="my" />)
        const textElement = screen.getByText(/hello my/i);
        expect(textElement).toBeInTheDocument()
    })
})