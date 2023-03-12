import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
    
function Recipe() {
  let { recipeID } = useParams();
  const [recipe, setRecipe] = useState<any>({});

  let url = 'http://localhost:5000/cookbook/recipe/'
    
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(url + recipeID);
      const json = await response.json();
      setRecipe(json);
    }
    fetchData();
    console.log(recipe)
  }, [recipeID]);
    
    return (
        <section className="recipe-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-0" />
                    <div className="col-lg-10 col-md-12">
                        {recipe && 
                            <div className="main-recipe">
                                <div className="recipe-top-area">
                                    <h3 className="title">
                                        <span>
                                            <b>{recipe.recipeName}</b>
                                        </span>
                                    </h3>
                                    <p className="para">
                                        Ingredients: {recipe.ingredients}
                                    </p>
                                    <p className="para">
                                        Instructions: {recipe.instructions}
                                    </p><p className="para">
                                        Time to cook: {recipe.timeToCook}
                                    </p>
                                </div>
                            </div>              
                        }
                        <Link to={`/edit/${recipe._id}`} className="btn btn-sm btn-outline-secondary">Edit Recipe </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Recipe;