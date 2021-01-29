import React from "react";
import { IRecipe } from '../models/models';

const RecipeTable = ({ recipe }) => {
    return (
        <table className="table table-bordered mb-4">
            <tbody>
                <tr>
                    <td>Description: </td>
                    <td>{ recipe.description }</td>
                </tr>
                <tr>
                    <td>Ingredients: </td>
                    <td>
                        <ul>
                            {
                                recipe.ingredients?.map((ingredient, index) => {
                                    return <li key={`ingredient_${index}`}>{ ingredient.amount } { ingredient.measurement } of { ingredient.name }</li>
                                })
                            }
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Preperation Time</td>
                    <td>{ recipe.prepTime} </td>
                </tr>
                <tr>
                    <td>Servings</td>
                    <td>{ recipe.servings} </td>
                </tr>
                <tr>
                    <td>Directions: </td>
                    <td>
                        <ul className="directions">
                            {
                                recipe.directions?.map((direction, index) => {
                                    return <li key={`direction_${index}`}>{ direction.optional ? '(Optional)': ''} { direction.instructions }</li>
                                })
                            }
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

RecipeTable.propTypes  = {
    recipe: IRecipe,
}

export default RecipeTable;


