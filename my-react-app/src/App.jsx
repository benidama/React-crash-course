import { createBrowserRouter,
  createRoutesFromElements, 
  Route,
RouterProvider } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
//import  HomePage  from './Components/HomePage';
//import  Propss  from './Components/Propss'; 
// import Events from './Components/Events';
import Router from './layout/Router';
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs';
import Home from './pages/Home';
//import Status from './Components/Status';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Router />}>
    <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
   </Route>  )
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>

     {/* <header className="App-header">
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
      </header> */}

        {/* <Events /> */}
       
       {/* <HomePage />

       <Propss /> 
       <Status/>  */}
       

    </div>
  );
}

export default App;
