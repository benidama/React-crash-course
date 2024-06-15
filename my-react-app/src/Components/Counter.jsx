import React,{useState} from 'react'

function Counter() {
    let [count, setCounter] = useState(0);
    const Decreament = () =>{
        setCounter(count - 1);
    };
    const Reset = () =>{
        setCounter(count = 0);
    };
    const Increament = () =>{
        setCounter(count + 1);
    };

  return (
    <div className='bg-success text-white container'>
        <h1>Here, we go with our counter App</h1>
        <h1 className='text-warning'>{count}</h1>
        <button className='btn m-3  text-white bg-primary'  type='button' onClick={Decreament}>Decreament</button>
        <button className='btn m-3 text-white bg-primary' type='button' onClick={Reset}>Reset</button>
        <button className='btn m-3 text-white bg-primary' type='button' onClick={Increament} >Increament</button>
    </div>
  );
}

export default Counter;