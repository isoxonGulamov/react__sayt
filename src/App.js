import React from "react";
import { AddCart } from "./components/cards/add-card";
import { Card } from "./components/cards/cards";
import "./App.css"
import { MainLayot } from "./layout/main-layout";
import olma from "./components/img/olma.webp"
import banan from "./components/img/banan.jpg"
import apelsin from "./components/img/apelsin.jpg"
import anor from "./components/img/anor.jpg"
import qulp from "./components/img/qulp.jpg"
import limon from "./components/img/limon2.jpg"
import ananas from "./components/img/ananas2.webp"
import uzum from "./components/img/uzum.webp"
import kiwi from "./components/img/kiwi3.webp"
import buy from "./components/img/korzinka.png"
function App() {
  let data = [
    {
      id:1,
      img:olma,
      name:"Olma",
      title:"Goood !",
      price:10,
      raiting:"⭐⭐⭐⭐"
    },
    {
      id:2,
      img:banan,
      name:"Banan",
      title:"Excellent !",
      price:16,
      raiting:"⭐⭐⭐⭐"
    },
    {
      id:3,
      img:apelsin,
      name:"Apelsin",
      title:"Goood !",
      price:14,
      raiting:"⭐⭐⭐"
    },
    {
      id:4,
      img:anor,
      name:"Anor",
      title:"Excellent !",
      price:20,
      raiting:"⭐⭐⭐⭐⭐"
    },
    {
      id:5,
      img:qulp,
      name:"Qulupnay",
      title:"Excellent !",
      price:18,
      raiting:"⭐⭐⭐⭐"
    },
    {
      id:6,
      img:limon,
      name:"Limon",
      title:"Good !",
      price:24,
      raiting:"⭐⭐⭐"
    },
    {
      id:7,
      img:ananas,
      name:"Ananas",
      title:"Good !",
      price:26,
      raiting:"⭐⭐⭐⭐"
    },
    {
      id:8,
      img:kiwi,
      name:"Kiwi",
      title:"Excellent !",
      price:20,
      raiting:"⭐⭐⭐⭐"
    },
    {
      id:9,
      img:uzum,
      name:"Uzum",
      title:"Excellent !",
      price:18,
      raiting:"⭐⭐⭐⭐⭐"
    },
  ]

//////////////////////////////////////////////////
  const [qiymat,setqiymat] = React.useState(data)
  const [addqiymat,setaddqiymat] = React.useState([])
const deleteitem = (id)=>{
setqiymat((qiymat)=>qiymat.filter((item)=> item.id !== id))
}
const deleteitem2 = (id)=>{
setaddqiymat((addqiymat)=> addqiymat.filter((item)=> item.id !== id))
}
console.log(qiymat);
console.log(addqiymat);
const setitem = (id)=>{
for(let i of qiymat){
  if (i.id === id) {
    let produc = i
      
      if (!addqiymat.find(el => el.id == produc.id)) {
        setaddqiymat((addqiymat)=>{
          return [...addqiymat,i]
        })
      }else{
        alert("avval qo'shilgan")
      }
      
  }
}

localStorage.setItem("products",JSON.stringify(addqiymat))
// let produc = products.find(el => el.id == e.target.id)
// let arr = JSON.parse(localStorage.getItem("products")) || []
// if (!arr.find(el => el.id == produc.id)) {
// arr.push(produc)
// console.log(arr);
// }else{
// alert("avval qo'shilgan")
// }



// localStorage.setItem("products",JSON.stringify(arr))
}
return (
 <MainLayot>
<div className="megicbox">
<div className="box">
 {
    qiymat?.map((item)=>{
      return <Card key={item.id}  setitem={setitem}  deleteitem={deleteitem} {...item}/>
    })
   }
 </div>
   <div className="box2">

     <h1 className="warn">Korzinka</h1><img className="buybtn" src={buy} alt="korzinka" />
   {
    addqiymat?.map((item)=>{
  
      return <AddCart key={item.id}  deleteitem2={deleteitem2} {...item}/>
    })
   }
   </div>
</div>
 </MainLayot>
  
)
}

export default App;
