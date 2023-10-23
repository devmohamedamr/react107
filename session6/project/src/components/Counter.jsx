import { useState } from "react";
function Counter(){
    let [number,setNumber] = useState(0)
    return (
        <>
            <h1>count is  : {number}</h1>
            <button onClick={increment}>increment</button>
        </>
    )
    function increment(){
        setNumber(++number)
    }
}


export default Counter;