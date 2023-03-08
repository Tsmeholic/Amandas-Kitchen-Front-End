import React from 'react';
import {  Outlet} from "react-router-dom";
import Navbar from './components/NavigationBar';
import Home from './components/Home';
import Recipe from './components/recipe/Recipe';
import Edit from './components/recipe/Edit';
import Create from './components/recipe/Create';

    
function App(): JSX.Element {
  return (    
      <div className="App">
        <Navbar />
        <div className={'container'}>
          <Outlet />
        </div>
    </div>    
  );
}
export default App;
