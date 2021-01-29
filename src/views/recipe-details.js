import React from "react"
import ChildLayout from '../layout/child-layout';
import { getRecipe, deleteRecipe } from '../services/services';
import { PAGE_URL } from '../utils/constant/index';


class Home extends React.Component {

    state = {
        recipe: {

        },
    }

    componentDidMount(){
        const recipeId = this.props.match.params.id;
        getRecipe(recipeId).then((res) => {
            console.log(res);
            this.setState({ recipe: res.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleDelete = () => {
        const recipeId = this.props.match.params.id;
        deleteRecipe(recipeId).then(() => {
            this.props.history.push("/");
        });
    }

    render() {
        const { recipe } = this.state;

        return (
            <ChildLayout>
                <h2>{ recipe.title }</h2>
                <div>
                    <div className="recipe-detail-cover mb-4">
                        <img src={ recipe.images?.full } className="img-fluid" alt="..." />
                    </div>
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
                    <div>
                        <a 
                            className="btn btn-primary mb-5 mr-2" 
                            href={`${PAGE_URL.updateRecipe}/${recipe.uuid}`}
                        >
                            Edit
                        </a>
                        <a 
                            className="btn btn-danger mb-5" 
                            onClick={this.handleDelete}
                        >
                            Delete
                        </a>
                    </div>
                </div>
            </ChildLayout>
        );
    }
}

export default Home;
