import React from "react";
interface propsType {
    name?: string
}
export const Greet: React.FC<propsType> = (props) => {
    return <div>Hello {props.name}</div>
}