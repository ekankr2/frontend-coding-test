import { useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    return (
        <div className="App">
            <div className="card">
                <button onClick={handleCount}>count is {count}</button>
            </div>
            <CardComponent />
        </div>
    );
}

export default App;
