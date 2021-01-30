import React from "react";
import RecipeFormInput from './recipe-form-input';
import { getRecipe } from '../services/services';
import { FORM_ACTION, FORM_RECIPE_INPUTS, INPUT_GROUP } from '../utils/constant/index';
import { GenerateIngredients, GenerateDirections } from '../utils/helpers/index';
import { findIndex, mapKeys } from 'lodash';

class RecipeForm extends React.Component {
    state = {
        forms: FORM_RECIPE_INPUTS,
    };
    
    handleChange = (e, parent) => {
        const { currentTarget: input } = e;
        const forms = [ ...this.state.forms ];
        if(!parent){
            const indexSingle = findIndex(forms, form => form.name == input.name);
            forms[indexSingle].value = input.value;
        } else {
            const indexParent = findIndex(forms, form => form.name == parent.name);
            forms[indexParent].value[parent.index][parent.child] = input.value;
        }
        this.setState({ forms });
    };

    handleAddItem = (name) => {
        const forms = [ ...this.state.forms ];
        const index = findIndex(forms, form => form.name == name);
        if(name === INPUT_GROUP.ingredients){
            forms[index].value.push(GenerateIngredients());
        } else {
            forms[index].value.push(GenerateDirections());
        }
        this.setState({ forms });
    }

    handleDeleteItem = (name, index) => {
        const forms = [ ...this.state.forms ];
        const itemIndex = findIndex(forms, form => form.name == name);
        const itemValue = forms[itemIndex].value;
        const recipeItem = itemValue.slice(0, index).concat(itemValue.slice(index + 1, itemValue.length));
        forms[itemIndex].value = recipeItem;
        this.setState({ forms });
    }

    componentDidMount(){
        const { action, recipeId } = this.props;
        const forms = [ ...this.state.forms ];
        if(action === FORM_ACTION.update){
            getRecipe(recipeId).then((res) => {
                mapKeys(res.data, (value, key) => {
                    const index = findIndex(forms, form => form.name === key);
                    if(forms[index]){
                        forms[index].value = value;
                    }
                });
                this.setState({ forms });
            });
        }
    }

    render() {
        const { forms } = this.state;
        return (
            <form>
                { 
                    forms.map(input => {
                        return <RecipeFormInput 
                            key={input.name} 
                            input={input} 
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
