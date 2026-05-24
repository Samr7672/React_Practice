import React from "react";
import { createRoot } from "react-dom/client";

// const element=React.createElement("h2",{},"hello");
// old method 

 const root=createRoot(document.querySelector("#root"));

// now we are using component, function based componenet

// function greet(name){
//    return <h1>hello my Love {name}</h1>
// }
// root.render(greet("Shivam"))

// Myntra Project 

//Header
// content
// footer

//props are object which is parameter of function 

function Card(props){
    return (
        <div height="50px" width="60px" 
        style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }} >
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1772082793_7492758.jpg?w=1080&dpr=2" height="100px" width="100px"></img>
            <div justify-element="center">
                <h1>{props.clothes}</h1>
                <h2>{props.offer}</h2>
                <h3> {props.price}</h3>
            </div>
        </div>
    )
        
    
}

const arr=[{clothes:"Shirt" ,offer:"20 to 30", price:"$20"}, {clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"},{clothes:"Shirt" ,offer:"20 to 30", price:"$20"}]

function App(){
    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}>
        {arr.map((value,index)=>(
          <Card
            key={index}
            clothes={value.clothes}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>
    )
}
root.render(<App />)