import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Router = () => {
  return (
    <>
    <div>
      
    <nav className='navbar navbar-expand-sm bg-primary justify-content-center'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/blogs">Blogs</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    
      
      <Outlet />
       
    </div>
    </>
    
  )
}

export default Router