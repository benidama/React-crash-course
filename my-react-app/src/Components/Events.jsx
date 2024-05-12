import React from 'react'

function Events() {

  const ar = ['Listname1:Quintus','Listname2:Farida','Listname3:Yves','Listname4:Cadette']
    
  return (
    <div className='bg-secondary text-white container mt-3'>
    <button className='btn bg-primary text-white m-3' onClick={ReactEvent}>click here</button>
    <h3>This chapter tells us more about React event</h3>
    <ul className='list-group bg-warning'>
        {ar.map((l,index) =>(<li className='list-group-item' key={index} >{l}</li>))}
        
    </ul>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Necessitatibus amet, commodi maiores voluptatibus magnam quam?
          I hpe that you have learned more about react event <br />
          and now you are able to make a goood react poject without any question or problem.
          </p>
     </div>
  )
 
}

const ReactEvent = () =>{
alert('Welcome to this crash course')       
};
export default Events;