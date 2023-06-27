import React from "react"

interface propsTypes {
    listing: string[]
}

export const Application: React.FC<propsTypes> = (props) => {
    return <div>
        <h1>Listing</h1>
        <ul>
            {props.listing.map((ele: string) => {
                return <li key={ele} >{ele}</li>
            })}
        </ul>
    </div>
}