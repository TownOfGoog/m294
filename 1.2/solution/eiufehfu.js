import { useState } from "react";


export function Counter() {
    const [counter, setCounter] = useState(0);

    const decrement = () =>{
        alert("decrement");

    }

    const increment = () => {
        alert("increment");

    }

    return (
        <div>
            <button onClick={decrement}>-1</button>
            <p>{counter}</p>
            <button onClick={decrement}>+1</button>
        </div>
    )
}