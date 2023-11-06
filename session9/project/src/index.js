import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Products from './components/Products';
import Singleproduct from './components/Singleproduct'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"",
    element:<App />,
    children:[
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/singleproduct/:id",
        element:<Singleproduct />
      }
    ]
  }
])
root.render(
 
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
