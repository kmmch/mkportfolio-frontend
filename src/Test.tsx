import { FC } from "react";
import { TestType } from "./types/test";

export const Test:FC<TestType> = (props) => {
    const { text } = props;
    
    return (
        <>
            <p>{ text }</p>
        </>
    );
}