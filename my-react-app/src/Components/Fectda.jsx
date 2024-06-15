 import Axios from "axios";
import  React, { useEffect, useState }  from "react";



function Fectda() {
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json)
  // .then((data) => {
  //   console.log(data);
  // });
  const [cat, setCat] = useState("");
  const getData = () =>{
    Axios.get('https://catfact.ninja/fact').then((res) => {setCat(res.data.fact);});
  }
  
  // useEffect(() =>{
  //   Axios.get('https://catfact.ninja/fact').then((res) => {setCat(res.data.fact);});
  
  // }, []);
  return (
    <div className=" container bg-success m-3">
      <h1>How can I fetch data by using react?</h1>
      <p className="text-white">{cat}</p>
      <button className="btn btn-primary m-3" onClick={getData}>Get data</button>
    </div>
  );
}
export default Fectda;