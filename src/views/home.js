import React from "react";
import FullLayout from '../layout/full-layout';
import { PAGE_URL } from '../utils/constant/index';
import { getRecipes } from '../services/services';
import RecipeCards from '../components/recipe-cards';

class Home extends React.Component {

    state = {
        recipes: [],
    }

    componentDidMount(){
        getRecipes().then((res) => {
            this.setState({ recipes: res.data });
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
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        { 
                            this.state.recipes.map((recipe, index) => {
                                return <RecipeCards recipe={recipe} key={`recipe_${index}`} />
                            })
                        }
                    </div>
                </div>

            </FullLayout>
        );
    }
}

export default Home;
