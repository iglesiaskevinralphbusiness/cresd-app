import React from "react"
import ChildLayout from '../layout/child-layout';
import RecipeTable from '../components/recipe-table';
import { getRecipe, deleteRecipe } from '../services/services';
import { PAGE_URL } from '../utils/constant/index';


class Home extends React.Component {

    state = {
        recipe: {},
    }

    componentDidMount(){
        const recipeId = this.props.match.params.id;
        getRecipe(recipeId).then((res) => {
            console.log(res);
            const recipe = res.data;
            this.setState({ recipe });
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
                    <RecipeTable recipe={recipe}/>
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
