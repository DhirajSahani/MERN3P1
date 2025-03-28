import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1)
    } 
    const decrementCount = () => {
        setCount(count-1)
    }

    return (
        <>
            <h1 style={{margin:'50px'}}>{count}</h1>
            <button style={{margin:'10px'}} onClick={incrementCount}>+</button>
            <button style={{margin:'10px'}} onClick={decrementCount}>-</button>
        </>
    );
}

export default UseState;
