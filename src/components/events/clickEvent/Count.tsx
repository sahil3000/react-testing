import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = (value: number) => {
        setCount(prev => prev + value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => incrementHandler(1)}>Incremnt by 1</button>
            <button onClick={() => incrementHandler(5)}>Incremnt by 5</button>
        </div>
    )
}

export default Count;