import React from 'react'
import Events from '../Components/Events'
import logo from '../logo.svg'; 
import Status from '../Components/Status';

const Home = () => {

  return (
    <>

      <h1 className='text-uppercase'>I am trying to build my own website</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores maxime placeat laboriosam possimus, quibusdam neque a, aut rerum, fugiat earum magni!</p>

      <Events />
      <Status/>
    </>
  )
}

export default Home