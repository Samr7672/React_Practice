import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// this is the method  we use in vanilla JAVASCRIPT 

// function Counter(){

//     let count=0;

//     function countincrement(){
//         count+=1;
//         document.querySelector("h1").innerText=`count is ${count}`
//         document.querySelector(".first").innerText=`increment ${count}`
//     }

//     function countdecrement(){
//         count-=1;
//         document.querySelector("h1").innerText=`count is ${count}`
//         document.querySelector(".second").innerText=`decrement ${count}`
//     }

//     return (
//       <div className="main">
//         <h1> count is {count}</h1>
//         <div className="middle">
//         <button className="first" onClick={countincrement}>Increment {count}</button>
//         <button className="second" onClick={countdecrement}>decrement {count}</button>
//         </div>
//       </div>
//     )
// }

// Now we are Using UseState

function Counter(){

    let [count,setCount]=useState(0);

    function countincrement(){
        setCount(count+=1);
        
        // document.querySelector("h1").innerText=`count is ${count}`
        // document.querySelector(".first").innerText=`increment ${count}`
    }

    function countdecrement(){
        setCount(count-=1);
        // document.querySelector("h1").innerText=`count is ${count}`
        // document.querySelector(".second").innerText=`decrement ${count}`
    }

    return (
      <div className="main">
        <h1> count is {count}</h1>
        <div className="middle">
        <button className="first" onClick={countincrement}>Increment {count}</button>
        <button className="second" onClick={countdecrement}>decrement {count}</button>
        </div>
      </div>
    )
}

const root =createRoot(document.querySelector("#root"));
root.render(<Counter/>)