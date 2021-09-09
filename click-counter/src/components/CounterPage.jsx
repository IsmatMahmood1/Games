import "../styles/CounterPage.css";
import { Counter } from "./Counter";

export function CounterPage () {

    return (
        <div className="container">
            <Counter defaultValue={4}/>
        </div>
    )
}