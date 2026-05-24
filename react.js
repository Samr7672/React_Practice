import React from "react";
import { createRoot } from "react-dom/client";

// const element = React.createElement("h2", { id: "toot", style: { color: "red", backgroundColor: "black", fontSize: "Arial" } }, "hello kahan hai");
// const element2 = React.createElement("h2", { id: "voot", style: { color: "red", backgroundColor: "black", fontSize: "Arial" } }, "Yahan hai hum");
// const div = React.createElement("h2", { id: "loot", style: { color: "red", backgroundColor: "black", fontSize: "Arial" } }, [element, element2]);
// here createElement change it into a js object or react element 
const Reactroot = createRoot(document.querySelector("#root"));

// Reactroot.render(element);
// // you will see that the first element get replaced by second element so instead of this let's try another method 
// Reactroot.render(element2);


// but using this will make our file slow because first the link in html file are read and thenn it will choose properties 
// so we use Bundler
// bundler utna hi code dega jitna tumko chahiye na jyada na kam 
 // bundler can be webpack, vite , Parcel and webpack

 //jsx is different from html because it can take javascript expression 
 // expressions are the final result of the code it will not take statement 

 // you can also just style it from making a css document 

 // three ways to add a style in the jsx 

 const style={
    backgroundColor:"red",
    color:"black",
    fontFamily:"arial"
 }

 const newElement = (
    <div>
      <h1
        id="hello"
        className="hello2"
        style={{ backgroundColor: "black", color: "red", fontFamily: "Arial" }}
      >
        hello ,hi ,bye bye
      </h1>
      <h2 id="hello3" className="hello4" style={style}>what are u doing man</h2>
      <h3 id="first">i am doing nothing man</h3>
    </div>
 );
 
 Reactroot.render(newElement);






