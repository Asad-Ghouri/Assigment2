import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter + 1);
    };

    function decrement() {
        setCounter(counter - 1);
    }
    console.log("value of count is " + counter);
    return (
        <div>
            <h1>Increment and Decrement counter</h1>
            <div className="container">
                <button onClick={incrementCount}>+</button>
                <input id="counting" value={counter} />
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
};
