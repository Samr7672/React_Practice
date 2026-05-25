import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function Main() {
    const [color, setColor] = useState("black");

    // useEffect are used so that the file will render only one time 

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <>
            <h1>BackGround Color</h1>
            <div>
                <button onClick={() => setColor("red")}>Red</button>
                <button onClick={() => setColor("blue")}>Blue</button>
                <button onClick={() => setColor("brown")}>Brown</button>
                <button onClick={() => setColor("white")}>White</button>
                <button onClick={() => setColor("green")}>Green</button>
                <button onClick={() => setColor("yellow")}>Yellow</button>
            </div>
        </>
    );
}

createRoot(document.querySelector("#root")).render(<Main />);
