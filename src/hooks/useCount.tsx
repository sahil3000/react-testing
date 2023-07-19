import { useCallback, useState } from "react"

interface UseCountProps {
    intialCount?: number
}

export const useCount = ({intialCount = 0}: UseCountProps = {} ) => {
    const [count, setCount] = useState(intialCount);
   
    const increment = useCallback(()=> {
        setCount((prev: number) => prev + 1);
    },[])

    const decrement = useCallback(()=> {
        setCount((prev: number) => prev - 1);
    },[])

    return { count, increment, decrement };
}