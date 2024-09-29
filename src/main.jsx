import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rount from "./Component/Rounting";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Component/Rounting'

createRoot(document.getElementById('root')).render(


ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
  
),
)
