import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
    
function Recipe() {
  let { recipeID } = useParams();
  const [recipe, setRecipe] = useState<any>({});
    
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`$http://localhost:5000/cookbook/recipe/${recipeID}`);
      const json = await response.json();
      setRecipe(json);
    }
    fetchData();
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
                                        {recipe.body}
                                    </p>
                                </div>
                            </div>              
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Recipe;