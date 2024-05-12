import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Router = () => {
  return (
    <>
    <div>
      
      <nav className="navbar navbar-expand-sm bg-primary justify-content-center" >
        <ul className='navbar-nav'>
          <li className='nav-items'>
            <Link className='nav-link text-white'  to="/">Home</Link>
          </li>
          <li className='nav-items'>
            <Link className='nav-link text-white'  to="/contactus">ContactUs</Link>
          </li>
          <li className='nav-items' >
            <Link className='nav-link text-white'  to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    
      
      <Outlet />
       
    </div>
    </>
    
  )
}

export default Router