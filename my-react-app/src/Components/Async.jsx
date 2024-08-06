import React from 'react'

function FirstOne(){
    const arr = ['Mutarama', 'Gashyantare', 'Werurwe', 'Mata']
    return(
        <>
        <p>The following are the first four month of the year</p> 
        <ul style={{listStyle:'none'}}> {arr.map(ar =><li className='text-success'>{ar}</li>)}</ul>
        </>
        
    )
}

  function Calculator() {
    let sum = 245;
    
    return(
        <div>
            <p>Try this <strong>{sum}</strong> number  </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi?</p>
            
        </div>
    )
   
  }
  
  
function Callbackus(){
    
    return (
        <>
        <h3>This is the call back function</h3>
        <FirstOne/>
        <Calculator />
        
        </>
    )
}

const Async = () => {
  return (
    <>
    <h2>How can I learn Asynchronous functin in Javastcript programming language</h2>
    <Callbackus/>
    
    </>
  )
}

export default Async;