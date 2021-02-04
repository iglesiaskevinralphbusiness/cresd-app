import React from "react"
import ChildLayout from '../layout/child-layout';
import RecipeTable from '../components/recipe-table';
import { getRecipe, deleteRecipe, getSpecials } from '../services/services';
import { PAGE_URL } from '../utils/constant/index';
import RecipeCardsPhoto from '../components/recipe-cards-photo';

class Home extends React.Component {

    state = {
        recipe: {},
        specials: [],
    }

    componentDidMount(){
        const recipeId = this.props.match.params.id;
        getRecipe(recipeId).then((res) => {
            const recipe = res.data;
            this.setState({ recipe });
        }).catch((error) => {
            console.log(error);
        });
        getSpecials().then((res) => {
            const specials = res.data;
            this.setState({ specials });
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
        const { recipe, specials } = this.state;

        return (
            <ChildLayout>
                <h2>{ recipe.title }</h2>
                <div>
                    <div className="recipe-detail-cover mb-4">
                        <RecipeCardsPhoto image={recipe.images} size="L" />
                    </div>
                    <RecipeTable recipe={recipe} specials={specials} />
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
