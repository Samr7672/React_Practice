import React, {useState}from "react";
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

// USing Hook and Usestate

const arr=[
  { clothes: "Shirt", offer: "20 to 30", price: 220 },
  { clothes: "T-shirt", offer: "40 to 50", price: 230 },
  { clothes: "Jeans", offer: "20 to 50", price: 240 },
  { clothes: "Jacket", offer: "10 to 30", price: 250 },
  { clothes: "Hoodie", offer: "45 to 55", price: 260 },
  { clothes: "Track Pant", offer: "25 to 35", price: 210 },
  { clothes: "Kurta", offer: "20 to 30", price: 220 },
  { clothes: "Sneakers", offer: "20 to 30", price: 220 },
  { clothes: "Cap", offer: "20 to 30", price: 220 },
  { clothes: "Socks", offer: "20 to 30", price: 220 },
  { clothes: "Watch", offer: "20 to 30", price: 220 },
  { clothes: "Belt", offer: "10 to 30", price: 224 },
  { clothes: "Bag", offer: "20 to 30", price: 222 },
  { clothes: "Shoes", offer: "20 to 30", price: 240 },
  { clothes: "Coat", offer: "20 to 30", price: 220 },
]


function Card(props){
    return (
      <>

        <div height="50px" width="60px" 
        style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }} >
            <img src="https://imgs.search.brave.com/DEotfZ1-jf7Apy1PL_pQMB5pkk7t7cq1S5WYagkpsZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L015bnRyYS1Mb2dv/LTUwMHgyODEucG5n" height="100px" width="100px"/>
            <div justify-element="center">

                <h1>{props.clothes}</h1>
                <h2>{props.offer}</h2>
                <h3> {props.price}</h3>
            </div>
        </div>
   
        
   </> 
    )
}

function Header(){
  return (
    <div className="header" > 
      <img className="image" src="https://imgs.search.brave.com/DEotfZ1-jf7Apy1PL_pQMB5pkk7t7cq1S5WYagkpsZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L015bnRyYS1Mb2dv/LTUwMHgyODEucG5n/" height="50px" width="10px"/>
      <div className="opions">
        <button>Filters</button>
        <button>Home</button>
        <button>Shirt</button> 
        <button>Pant</button>
        <button>Kids Clothes</button> 
        <button>Women`s Clothes</button>
        <button>Shoes</button>
      </div>
      <input id="input" placeholder="Search Here For Clothes"></input>

      <div className="middle">
        <button>Profile</button>
        <button>WishList</button>
        <button>Bag</button>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <img className="footer" src="https://cdn.dribbble.com/userupload/26652765/file/original-8a2c30e2f059368b2f63c16c6462e0db.jpg?resize=400x300&vertical=center" />
  )
}


function App(){
    const [a, seta] = useState(arr)

    function sortPrice(){
      a.sort((a,b)=> a.price-b.price)
      seta([...a])// useState uses reference 
    }

    function sortDiscount(){
      a.sort((a,b)=> parseInt(b.offer) - parseInt(a.offer))
      seta([...a])
    }

    return (
      <>
        <Header/>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent:"center",
        }}>
          <button className="price" onClick={sortPrice} > Sort BY price</button>
          <button className="price" onClick={sortDiscount} >Sort By Discount</button>
          {a.map((value,index)=>(
            <Card
              key={index}
              clothes={value.clothes}
              offer={value.offer}
              price={value.price}
            />
          ))}
        </div>
        <Footer/>
      </>
    )
}
root.render(<App />)