import React from "react";
import TextInput from './inputs/text-input';
import NumberInput from './inputs/number-input';

class RecipeForm extends React.Component {
    state = {
        recipe: {
          title: "",
          description: "",
          cookTime: "",
          prepTime: "",
          servings: "",
          directions: [],
          ingredients: []
        },
    };
    
    handleChange = e => {
        const { currentTarget: input } = e;
        const recipe = { ...this.state.recipe };
        recipe[input.name] = input.value;
        this.setState({ recipe });
    };

    render() {
        const { recipe } = this.state;

        return (
            <form>
                <TextInput
                    name='title'
                    label='Title'
                    type='text'
                    value={recipe.title}
                    onChange={this.handleChange}
                />
                <TextInput
                    name='description'
                    label='Description'
                    type='text'
                    value={recipe.description}
                    onChange={this.handleChange}
                />
                <NumberInput
                    name='cookTime'
                    label='Cooking Time'
                    type='text'
                    value={recipe.cookTime}
                    onChange={this.handleChange}
                />
                <NumberInput
                    name='prepTime'
                    label='Preparation Time'
                    type='text'
                    value={recipe.prepTime}
                    onChange={this.handleChange}
                />
                <NumberInput
                    name='servings'
                    label='Serving'
                    type='text'
                    value={recipe.servings}
                    onChange={this.handleChange}
                />
                <button type='submit' className="btn btn-primary">Submit</button>
          </form>
        );
    }
}

export default RecipeForm;
