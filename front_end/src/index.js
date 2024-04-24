import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Course from './Course';
import Blog from './Blog';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "course",
    element: <Course />
  },
  {
    path: "blog",
    element: <Blog />
  },  
  {
    path: "contact",
    element: <Contact />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// Campus site