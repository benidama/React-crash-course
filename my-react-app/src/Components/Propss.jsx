import React from 'react'

function Prop(props){
    return <h4 className='bg-primary'>I am the props { props.behav }! </h4>
}

function Obje(props){
  
  return (
    <>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <p>I have to do hard in order to know this technology wich will lead me to the success of my goal. ,<br />
      Even if, it is hard task to acheive it but it my target to do it. <br />
      Because my friend called {props.mana.name} promised me to support me to acheive my goal.
    </p>
    </>
  )
}

const Propss = () => {
  const point = 'in this course';
  const intab = {
    name: 'Joanes',
    age: 34,
    country: 'Rwanda'
  };
  return (
    <div className='container bg-black text-white'>
        <h4>Who are you?</h4>
        <Prop behav= {point} />
        <Obje mana= {intab} />
    </div>
  )
}

export default Propss;
