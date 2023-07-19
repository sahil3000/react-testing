import { screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import { AppProviders } from "../../provider/AppProviders";
import { render } from "../../test-utlility";

describe('MUI Mode', () => {
    test("render text correctly", () => {
        render(<MuiMode/>)
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    })
});