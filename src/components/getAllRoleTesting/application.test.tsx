import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("GetByAllRole Application Component", () => {
    it("correct correctly", () => {
        const names = ["test1", "test2", "test3"]
        render(<Application listing={names} />)

        const h1Element = screen.getByText("Listing");
        expect(h1Element).toBeInTheDocument();
    });

    it("check listing properly", () => {
        const names = ["test1", "test2", "test3"]
        render(<Application listing={names} />)

        const listElement = screen.getAllByRole("listitem");
        expect(listElement).toHaveLength(names.length);
    });
});