import { useState, useEffect } from 'react'

function Timer() {
    const [count, setCount] = useState(0);
    // const [amount, setAmount] = useState(0);
    //const tubare = 1;
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[]);

    // useEffect(() =>{
    //   setAmount(()=> count *2)
    // })
  
    return <h1 className='text-secondary'>I've rendered {count} times in {count} days!</h1>;
  }

export default Timer