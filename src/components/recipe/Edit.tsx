import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Edit(): JSX.Element {
    let history = useHistory();
    let { recipeID } = useParams();
      
    interface IValues {
      [key: string]: any;
    }
      
    const [recipe, setRecipe] = useState<any>()
    const [values, setValues] = useState<IValues>([]);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
    const [loading, setLoading] = useState(false);
      
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        const response = await fetch(`$http://localhost:5000/cookbook/recipe/${recipeID}`);
        const json = await response.json();
        setRecipe(json)    
      }
      fetchData();    
    }, [recipeID]);

    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const submitSuccess: boolean = await submitForm();
        setSubmitSuccess(submitSuccess);
        setLoading(false);
        setTimeout(() => {
          history.push('/');
        }, 1500);
    }
    const submitForm = async (): Promise<boolean> => {
        try {
          const response = await fetch(`$http://localhost:5000/cookbook/edit?recipeID=${recipeID}`, {
            method: "put",
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
            }),
            body: JSON.stringify(values)
          });
          return response.ok;      
        } catch(ex) {
          return false;
        }
    }
    const setFormValues = (formValues: IValues) => {
        setValues({...values, ...formValues})
    }
    const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        setFormValues({ [e.currentTarget.id]: e.currentTarget.value })
    }
      
    return (
        <div className={'page-wrapper'}>
            {recipe &&
                <div className={"col-md-12 form-wrapper"}>
                    <h2> Edit Recipe  </h2>
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The recipe has been edited successfully!
                        </div>
                    )}
                    <form id={"create-recipe-form"} onSubmit={handleFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="recipeName"> Title </label>
                            <input type="text" id="recipeName" defaultValue={recipe.recipeName} onChange={(e) => handleInputChanges(e)} name="recipeName" className="form-control" placeholder="Enter recipe name.." />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="ingredients"> Ingredients </label>
                            <input type="text" id="ingredients" defaultValue={recipe.ingredients} onChange={(e) => handleInputChanges(e)} name="ingredients" className="form-control" placeholder="Enter ingredients.." />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="timeToCook"> timeToCook </label>
                            <input type="text" id="timeToCook" defaultValue={recipe.timeToCook} onChange={(e) => handleInputChanges(e)} name="timeToCook" className="form-control" placeholder="Enter time to cook.." />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="dateAdded"> timeToCook </label>
                            <input type="text" id="dateAdded" defaultValue={recipe.dateAdded} onChange={(e) => handleInputChanges(e)} name="dateAdded" className="form-control" placeholder="Enter current date.."/>
                        </div>
                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                            Edit Recipe
                            </button>
                            {loading &&
                            <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
            }
        </div>
    )
      
  }
  export default Edit;