const element=React.createElement("h2",{id:"toot", style:{color:"red", backgroundColor:"black", fontSize:"Arial"}},'hello kahan hai')
const element2=React.createElement("h2",{id:"voot", style:{color:"red", backgroundColor:"black", fontSize:"Arial"}},'Yahan hai hum')
const div=React.createElement("h2",{id:"loot", style:{color:"red", backgroundColor:"black", fontSize:"Arial"}},[element,element2])
const Reactroot=ReactDOM.createRoot(document.querySelector("#root"));

Reactroot.render(div);
// Reactroot.render(element);
// // you will see that the first element get replaced by second element so instead of this let's try another method 
// Reactroot.render(element2);


// but using this will make our file slow because first the link in html file are read and thenn it will choose properties 
// so we use Bundler
