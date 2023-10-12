import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import About from './About';
import Root from './Root';
import Services from './Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [

      {
        path: "/home",
        element: <Home></Home>,
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      }
    ]
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
