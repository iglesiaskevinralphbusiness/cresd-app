import React from "react";
import { PAGE_URL } from '../utils/constant/index';

const RecipeCards = ({ recipe }) => {
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={recipe.images?.full} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ recipe.title }</h5>
                    <p className="card-text">{ recipe.description }</p>
                    <a className="btn btn-primary mr-2" href={`${PAGE_URL.detailsRecipe}/${recipe.uuid}`} >View</a>
                    <a className="btn btn-danger">Delete</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{ recipe.editDate }</small>
                </div>
            </div>
        </div>
    );
}

export default RecipeCards;
