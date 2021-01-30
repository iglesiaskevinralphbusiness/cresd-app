import React from "react";
import FormInput from './recipe-form-input';
import { getRecipe } from '../services/services';
import { FORM_ACTION, FORM_RECIPE_INPUTS, INPUT_GROUP } from '../utils/constant/index';
import { GenerateIngredients, GenerateDirections } from '../utils/helpers/index';

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
        if(!parent){
            recipe[input.name] = input.value;
        } else {
            recipe[parent.name][parent.index][parent.child] = input.value;
        }
        this.setState({ recipe });
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

    handleDeleteItem = (name, index) => {
        const recipe = { ...this.state.recipe };
        const recipeItem = recipe[name].slice(0, index).concat(recipe[name].slice(index + 1, recipe[name].length))
        recipe[name] = recipeItem;
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
                { 
                    forms.map(input => {
                        return <FormInput 
                            recipe={recipe}
                            input={input} 
                            key={input.name} 
                            handleChange={this.handleChange} 
                            handleAddItem={this.handleAddItem} 
                            handleDeleteItem={this.handleDeleteItem} 
                        />
                    })
                }
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default RecipeForm;
