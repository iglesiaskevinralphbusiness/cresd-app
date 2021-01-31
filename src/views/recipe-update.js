import React from "react"
import ChildLayout from '../layout/child-layout';
import RecipeFormInput from '../components/recipe-form-input';
import { getRecipe, addRecipe, updateRecipe } from '../services/services';
import { FORM_ACTION, FORM_RECIPE_INPUTS, INPUT_GROUP, PAGE_URL } from '../utils/constant/index';
import { GenerateIngredients, GenerateDirections } from '../utils/helpers/index';
import { findIndex, mapKeys } from 'lodash';
import { GenerateId, TimeNow, GenerateRecipeForm } from '../utils/helpers/index';

class Home extends React.Component {
    state = {
        forms: FORM_RECIPE_INPUTS,
    };

    getAction(){
        const { path } = this.props.match;
        if(path === PAGE_URL.addRecipe){
            return FORM_ACTION.add;
        } else {
            return FORM_ACTION.update;
        }
    }

    handleChange = (e, parent) => {
        const { currentTarget: input } = e;
        const forms = [ ...this.state.forms ];
        if(!parent){
            const indexSingle = findIndex(forms, form => form.name === input.name);
            forms[indexSingle].value = input.value;
        } else {
            const indexParent = findIndex(forms, form => form.name === parent.name);
            forms[indexParent].value[parent.index][parent.child] = input.value;
        }
        this.setState({ forms });
    };

    handleAddItem = (name) => {
        const forms = [ ...this.state.forms ];
        const index = findIndex(forms, form => form.name === name);
        if(name === INPUT_GROUP.ingredients){
            forms[index].value.push(GenerateIngredients());
        } else {
            forms[index].value.push(GenerateDirections());
        }
        this.setState({ forms });
    }

    handleDeleteItem = (name, index) => {
        const forms = [ ...this.state.forms ];
        const itemIndex = findIndex(forms, form => form.name === name);
        const itemValue = forms[itemIndex].value;
        const recipeItem = itemValue.slice(0, index).concat(itemValue.slice(index + 1, itemValue.length));
        forms[itemIndex].value = recipeItem;
        this.setState({ forms });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const { forms } = this.state;
        const recipe = GenerateRecipeForm(forms);
        if(this.getAction() === FORM_ACTION.add){
            recipe['uuid'] = GenerateId(20);
            recipe['postDate'] = TimeNow();
            recipe['editDate'] = TimeNow();
            addRecipe(recipe).then(() => {
                this.props.history.push(PAGE_URL.home);
            });
        } else {
            recipe['uuid'] = id;
            recipe['editDate'] = TimeNow();
            updateRecipe(id, recipe).then(() => {
                this.props.history.push(PAGE_URL.home);
            });
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        const forms = [ ...this.state.forms ];
        if(this.getAction() === FORM_ACTION.update){
            getRecipe(id).then((res) => {
                mapKeys(res.data, (value, key) => {
                    const index = findIndex(forms, form => form.name === key);
                    if(forms[index]){
                        forms[index].value = value;
                    }
                });
                this.setState({ forms });
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        const { forms } = this.state;
        return (
            <ChildLayout>
                { this.getAction() === FORM_ACTION.add ? <h2>Add Recipe</h2> : <h2>Edit Recipe</h2> }
                <form onSubmit={this.handleSubmit}>
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
            </ChildLayout>
        );
    }
}

export default Home;
