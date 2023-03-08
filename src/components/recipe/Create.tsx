import React, {useState, useEffect } from 'react';
//import { withRouter, useHistory } from 'react-router-dom';

function Create(): JSX.Element{
    
    console.log('hey we made it to create')
  //  let history = useHistory();
    
    interface IValues {
        [key: string]: any;
    }

    const [values, setValues] = useState<IValues>([]);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            recipeName: values.recipeName,
            ingredients: values.ingredients,
            timeToCook: values.timeToCook,
            dateAdded: values.dateAdded
        }
        const submitSuccess: boolean = await submitform(formData);
        setSubmitSuccess(submitSuccess);
        setValues({...values, formData});
        setLoading(false);
        setTimeout(() => {
          //  history.push('/');
        }, 1500);
    }

    const submitform = async (formData: {}) => {
        try {
            const response = await fetch(`$http://localhost:5000/cookbook/recipe`, {
                method: "post",
                headers: new Headers({
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }),
                body:JSON.stringify(formData)
            });
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    const setFormValues = (formValues:IValues) => {
        setValues({...values, ...formValues})
    }
    
    
     
    const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormValues({ [e.currentTarget.name]: e.currentTarget.value})
    }

    return(
        <div>
            <div className={"col-md-12 form-wrapper"}>
                <h2> Add Recipe </h2>
                {!submitSuccess && (
                    <div  className="alert alert-info" role="alert">
                        Fill the form below to add a new recipe.
                    </div>
                )}
                {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        The form was successfully submitted!
                    </div>
                )}
                <form id={"create-recipe-form"} onSubmit={handleFormSubmission} noValidate={true}>
                    <div className="form-group col-md-12">
                        <label htmlFor="recipeName"> Recipe Name </label>
                        <input type="text" id="recipeName" onChange={(e) => handleInputChanges(e)} name="recipeName" className="form-control" placeholder="Enter recipe name.." />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="ingredients"> Ingredients </label>
                        <input type="text" id="ingredients" onChange={(e) => handleInputChanges(e)} name="ingredients" className="form-control" placeholder="Enter ingredients and quantity.." />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="timeToCook"> Time to cook </label>
                        <input type="text" id="timeToCook" onChange={(e) => handleInputChanges(e)} name="timeToCook" className="form-control" placeholder="Enter time to cook.." />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="dateAdded"> Date added </label>
                        <input type="text" id="dateAdded" onChange={(e) => handleInputChanges(e)} name="dateAdded" className="form-control" placeholder="Enter the current date.." />
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
        </div>
    );
}

export default Create;