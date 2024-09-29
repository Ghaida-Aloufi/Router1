import React from 'react'
import Signin from '../Pages/signin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/Signin",
    element: <Signin/>,
  },
 
]);

<RouterProvider router={router} />


export default Rount
