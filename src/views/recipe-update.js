import React from "react"
import ChildLayout from '../layout/child-layout';
import RecipeForm from '../components/recipe-form';
import { FORM_ACTION, PAGE_URL } from '../utils/constant/index';

class Home extends React.Component {
    getAction(){
        const { path } = this.props.match;
        if(path === PAGE_URL.addRecipe){
            return FORM_ACTION.add;
        } else {
            return FORM_ACTION.update;
        }
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <ChildLayout>
                { this.getAction() === FORM_ACTION.add ? <h2>Add Recipe</h2> : <h2>Edit Recipe</h2> }
                <RecipeForm action={this.getAction()} recipeId={id} history={this.props.history} />
            </ChildLayout>
        );
    }
}

export default Home;
