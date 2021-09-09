import "../styles/Counter.css";
import { useState, useEffect } from "react";

export function Counter ({defaultValue}) {

    const [ counter, setCounter ] = useState(defaultValue); //this runs first, if inital value here is not default value then you will see it flicker on screen first before the useEffect comes in

    useEffect(() => {
        setCounter(defaultValue) // runs when the page first loads
    },[defaultValue]);           // and then everytime this value changes

    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="counter">
            <div className="title">Welcombe to my Counter!</div>
            <div className="counter-value">{counter}</div>
            <div >
                <button className="btn" onClick={increaseCounter}>Increase</button>
                <button className="btn" onClick={decreaseCounter}>Decrease</button>
            </div>
        </div>
    )

}