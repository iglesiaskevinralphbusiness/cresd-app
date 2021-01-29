import React from "react"
import ChildLayout from '../layout/child-layout';
import RecipeForm from '../components/recipe-form';
import { FORM_ACTION } from '../utils/constant/index';

class Home extends React.Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <ChildLayout>
                <h2>Edit Recipe</h2>
                <RecipeForm action={FORM_ACTION.update} recipeId={id} />
            </ChildLayout>
        );
    }
}

export default Home;
