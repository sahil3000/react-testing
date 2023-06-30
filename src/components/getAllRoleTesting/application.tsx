import React, { useEffect, useState } from "react"

interface propsTypes {
    listing: string[]
}

export const Application: React.FC<propsTypes> = (props) => {
    const [isLogin] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setIsShow(true), 2000);
    },[]);

    return <div>
        <h1>Listing</h1>
        <ul>
            {props.listing.map((ele: string) => {
                return <li key={ele} >{ele}</li>
            })}
        </ul>
        {isLogin ? (
            <button>Start learning</button>
            ): (
            <button>Login</button>
        )}

        {isShow ? (
            <button>Showing</button>
            ): (
            <button>Hidden</button>
        )}
    </div>
}