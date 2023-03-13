import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import { router } from "./router";
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuSHG_aGRqI-w6z6NeLAP2i1NBVEOCmb0",
  authDomain: "amandas-kitchen-front-en-d2db8.firebaseapp.com",
  projectId: "amandas-kitchen-front-en-d2db8",
  storageBucket: "amandas-kitchen-front-en-d2db8.appspot.com",
  messagingSenderId: "684971781241",
  appId: "1:684971781241:web:206d1a96db07a7f2e038a8",
  measurementId: "G-NJFR3JKN07"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />  
);
