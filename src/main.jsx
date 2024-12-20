import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";;
import AddCoffee from './compontents/AddCoffee.jsx';
import UpdateCoffee from './compontents/UpdateCoffee.jsx';
import Roots from './compontents/Roots.jsx';
import SignIn from './compontents/SignIn.jsx';
import SignUp from './compontents/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './compontents/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/singIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/singUp',
        element: <SignUp></SignUp>,
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:() => fetch('http://localhost:5000/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
