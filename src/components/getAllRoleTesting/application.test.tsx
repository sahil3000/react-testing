import { findByRole, getByRole, logRoles, render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("GetByAllRole Application Component", () => {
    it("correct correctly", () => {
        const names = ["test1", "test2", "test3"]
        render(<Application listing={names} />)

        const h1Element = screen.getByText("Listing");
        expect(h1Element).toBeInTheDocument();
    });

    it("check listing properly", () => {
        const names = ["test1", "test2", "test3"];
        render(<Application listing={names} />);

        const listElement = screen.getAllByRole("listitem");
        expect(listElement).toHaveLength(names.length);
    });

    it("is Login button render", () => {
        const names = ["test1", "test2", "test3"];
        render(<Application listing={names} />);
        const loginButton = screen.getByRole('button',{
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    });

    // getByRole throws error when conditional render of element. That's why we used queryByRole
    it("start learning button should not render", () => {
        const names = ["test1", "test2", "test3"];
        render(<Application listing={names} />);
        const startLearningButton = screen.queryByRole('button',{
            name: 'Start learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    // getByRole throws error when conditional render and with timing rendering of element. That's why we used findByRole
    // findByRole return a promise
    it("Showing button should render after 2500 ms", async () => {
        const names = ["test1", "test2", "test3"];
        const {container} = render(<Application listing={names} />);
        
        // show logs
        logRoles(container);
        
        const showingButton = await screen.findByRole('button',{
            name: 'Showing'
        },{
            timeout: 2500
        });
        
        expect(showingButton).toBeInTheDocument();
    });
});