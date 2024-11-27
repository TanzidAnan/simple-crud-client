import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './compontents/Roots';
import Home from './compontents/Home';
import Users from './compontents/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:() =>fetch('http://localhost:5000/users')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
