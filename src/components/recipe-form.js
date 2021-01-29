import React from "react";
import FormInput from './recipe-form-input';
import { getRecipe } from '../services/services';
import { FORM_ACTION, FORM_RECIPE_INPUTS, INPUT_GROUP } from '../utils/constant/index';
import { GenerateIngredients, GenerateDirections } from '../utils/helpers/index';
import { findIndex } from 'lodash';

class RecipeForm extends React.Component {
    state = {
        recipe: {
            title: "",
            description: "",
            cookTime: "",
            prepTime: "",
            servings: "",
            ingredients: [],
            directions: [],
        },
        forms: FORM_RECIPE_INPUTS,
    };
    
    handleChange = (e, parent) => {
        const { currentTarget: input } = e;
        const recipe = { ...this.state.recipe };
        if(!parent.name){
            recipe[input.name] = input.value;
            this.setState({ recipe });
        } else {
            recipe[parent.name][parent.index][parent.child] = input.value;
            this.setState({ recipe });
        }
    };

    handleAddItem = (name) => {
        const recipe = { ...this.state.recipe };
        if(name === INPUT_GROUP.ingredients){
            recipe[name].push(GenerateIngredients());
        } else {
            recipe[name].push(GenerateDirections());
        }
        this.setState({ recipe });
    }

    componentDidMount(){
        const { action, recipeId } = this.props;
        if(action === FORM_ACTION.update){
            getRecipe(recipeId).then((res) => {
                const recipe = res.data;
                this.setState({ recipe });
            });
        }
    }

    render() {
        const { recipe, forms } = this.state;
        return (
            <form>
                { forms.map(input => <FormInput recipe={recipe} input={input} key={input.name} handleChange={this.handleChange} handleAddItem={this.handleAddItem} />) }
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default RecipeForm;
