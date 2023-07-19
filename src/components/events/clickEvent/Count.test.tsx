import { render, screen } from "@testing-library/react";
import Count from "./Count";
import user from '@testing-library/user-event';

describe("Counter", () => {
    test("render correctly", () => {
        render(<Count/>);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();
        
        const IncremntBtn1Element = screen.getByRole('button',{
            name: 'Incremnt by 1'
        })
        expect(IncremntBtn1Element).toBeInTheDocument();

        const IncremntBtn5Element = screen.getByRole('button',{
            name: 'Incremnt by 5'
        })
        expect(IncremntBtn5Element).toBeInTheDocument();
    });

    test("render a count of 0", () => {
        render(<Count/>);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("0");
    })

    test("render a count of 1 after clicking the increment button", async () => {
        user.setup()

        render(<Count/>);
        const IncremntBtnElement = screen.getByRole('button',{
            name: 'Incremnt by 1'
        });
        await user.click(IncremntBtnElement);
        
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("1");
    });


    test("render a count of 5 after clicking the increment button", async () => {
        user.setup()

        render(<Count/>);
        const IncremntBtnElement = screen.getByRole('button',{
            name: 'Incremnt by 5'
        });
        await user.click(IncremntBtnElement);
        
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("5");
    });
})