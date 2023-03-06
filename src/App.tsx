import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavigationBar';
import Home from './components/Home';
import Recipe from './components/recipe/Recipe';
import Edit from './components/recipe/Edit';
import Create from './components/recipe/Create';
    
function App(): JSX.Element {
  console.log("Started");
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className={'container'}>
          <Switch>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/recipe/:recipeID"} element={<Recipe/>}/>
            <Route path={"/edit/:recipeID"} element={<Edit/>}/>
            <Route path={"/create"} element={Create} />
          </Switch>
        </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
