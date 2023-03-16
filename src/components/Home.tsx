import React, { useState, useEffect } from 'react';
import { Link,  } from 'react-router-dom';
    
function Home():JSX.Element {
    const [recipes, setRecipes] = useState<any>([]);
    let getURL = 'https://amandas-kitchen-back-end-d3jf7zhbfq-uc.a.run.app'
    let deleteURL = 'http://localhost:5000/cookbook/delete?recipeID='
  
    const deleteRecipe = async(id: string) => {
      await fetch(deleteURL + id, {
          method: "delete",
          headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
          })
      }).then(response => response.json);
      fetchRecipes();
    }

    const fetchRecipes = async () => {
        const response = await fetch(getURL);
        const json = await response.json();
        console.log(json)
        setRecipes(json)
    }
    
  useEffect(() => {
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