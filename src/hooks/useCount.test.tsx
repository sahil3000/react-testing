import { act, renderHook } from "@testing-library/react"
import { useCount } from "./useCount"

describe("useCount", () => {
    test("should render the initial count", () => {
        const { result } = renderHook(useCount);
        expect(result.current.count).toBe(0);
    });

    test("should accept and render the same intial count", () => {
        const { result } = renderHook(useCount, {
            initialProps: {
                intialCount: 10
            }
        });
        expect(result.current.count).toBe(10);
    });

    test("should be count increment then increment function called", () => {
        const { result } = renderHook(useCount);

        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test("should be count decrement then decrement function called", () => {
        const { result } = renderHook(useCount);

        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    });

})