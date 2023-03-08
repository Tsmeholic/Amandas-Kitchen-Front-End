import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import {  router} from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  

  <RouterProvider router={router} />
    // <Router>
    //  
    // <Route path="/" element={<App/>}>
    // <Route path="/" element={<Home/>}>

    // </Route>
    // <Route path="/recipe/:recipeID" element={<Recipe/>}></Route>
    // <Route path="/edit/:recipeID" element={<Edit/>}></Route>
    // <Route path="/create" element={<Create/>}></Route>
    // </Route>
    // </Router>
  
);
