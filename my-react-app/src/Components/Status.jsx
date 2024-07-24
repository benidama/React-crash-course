import React, { useState} from 'react'


const Updetedhoo = () => {
  const [car, setCar] = useState({
    type: 'Yes',
    year:1996,
    driver:"Kanuma",
    company:"Vivendi"
  })

  const Updated = () =>{
    setCar((pre) =>{return {...pre, driver:"QUINTUS"}
  });
  }
  
  return (
    <div>
      <h3>{car.type}, {car.company} was established in {car.year} at Paris/Francais</h3>
      <p>{car.driver} ipsum dolor sit amet.</p>
      <button type='button'className='btn btn-secondary' onClick={Updated}>Driver</button>
    </div>
  )
}



const Status = () => {
    const [color, setColor] = useState("red");
    const [type, setType] = useState("Hybrid")

  return (
    <div className='bg-info container'>
        <h1>This section is conataing React Hook crash course</h1>
        <h3>I am usestate with <strong>{color}</strong> color.</h3>
        <Updetedhoo />
        <p>Lorem, ipsum dolor <strong>{type}</strong> sit amet consectetur adipisicing.</p>
        <button className='btn btn-primary text-red m-3' type='button' onClick={() => setColor("blue")}>blue</button>
        <button className='btn btn-success text-red m-3' type='button' onClick={() => setColor("green")}>green</button>
        <button type='button' onClick={() => setType("Calina")} className='btn btn-secondary m-3 text-red'>Calina</button>
        
        
    </div>
  )
}

export default Status