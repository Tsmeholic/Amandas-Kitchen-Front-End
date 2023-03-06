import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
    
function Home():JSX.Element {
    console.log("here");
  let history = useHistory()
  const [recipes, setRecipes] = useState<any>();
    
  const deleteRecipe = async(id: string) => {
    await fetch(`$http://localhost:5000/cookbook/delete?recipes=${id}`, {
        method: "delete",
        headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        })
    });
    _removeRecipeFromView(id);
    history.push('/');
  }
    
  const _removeRecipeFromView = (id: string) => {
        const index = recipes.findIndex((recipes: { _id: string; }) => recipes._id === id);
        recipes.splice(index, 1);
  }
    
  useEffect(() => {
    const fetchRecipes = async (): Promise<any> => {
        const response = await fetch(`$http://localhost:5000/blog/recipes`);
        const json = await response.json();
        setRecipes(json)
    }
    fetchRecipes();
  }, [])
    return (
        <section className="blog-area section">
            <div className="container">
                <div className="row">
                    {recipes && recipes.map((recipe: { recipeName: React.ReactNode; _id: any; }) => (
                        <div className="col-lg-4 col-md-6" key={recipe._id}>
                            <div className="card h-100">
                                <div className="single-recipe recipe-style-1">
                                    <div className="cookbook-info">
                                        <h4 className="title">
                                            <span>
                                                <b>{recipe.recipeName}</b>
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                                <ul className="recipe-footer">
                                    <li>
                                        <Link to={`/recipe/${recipe._id}`} className="btn btn-sm btn-outline-secondary">View Recipe </Link>
                                    </li>
                                    <li>
                                        {
                                        <Link to={`/edit/${recipe._id}`} className="btn btn-sm btn-outline-secondary">Edit Recipe </Link>
                                        }
                                    </li>
                                    <li>
                                        {
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Home;