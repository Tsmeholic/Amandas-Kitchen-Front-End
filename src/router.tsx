import {createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Create from "./components/recipe/Create";
import Edit from "./components/recipe/Edit";
import Recipe from "./components/recipe/Recipe";



export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/recipe/:recipeID" element={<Recipe/>}></Route>
        <Route path="/edit/:recipeID" element={<Edit/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
    </Route>
))





     