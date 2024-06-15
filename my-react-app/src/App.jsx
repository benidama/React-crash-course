import { createBrowserRouter,
  createRoutesFromElements, 
  Route,
RouterProvider } from "react-router-dom";
import './App.css';
import Router from './layout/Router';
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs';
import Home from './pages/Home';


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

    </div>
  );
}

export default App;
