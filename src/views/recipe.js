import React from "react";
import FullLayout from '../layout/full-layout';
import { PAGE_URL } from '../utils/constant/index';
import { getRecipes, deleteRecipe } from '../services/services';
import RecipeCards from '../components/recipe-cards';
import { filter } from 'lodash';

class Home extends React.Component {

    state = {
        recipes: [],
    }

    handleDelete = (id) => {
        deleteRecipe(id).then(() => {
            const recipes = filter(this.state.recipes, recipe => recipe.uuid !== id);
            this.setState({ recipes });
        });
    }

    componentDidMount(){
        getRecipes().then((res) => {
            const recipes = res.data;
            this.setState({ recipes });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <FullLayout>
                <div>
                    <a 
                        className="btn btn-primary mb-5" 
                        href={PAGE_URL.addRecipe}
                    >
                        Add Recipe
                    </a>
                </div>
                <div>
                    <h2>All Recipe</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        { 
                            this.state.recipes.map((recipe, index) => {
                                return <RecipeCards recipe={recipe} key={`recipe_${index}`} deleteRecipe={this.handleDelete} />
                            })
                        }
                    </div>
                </div>
            </FullLayout>
        );
    }
}

export default Home;
