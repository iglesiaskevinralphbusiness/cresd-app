import React from "react";
import TextInput from  './inputs/text-input';
import NumberInput from './inputs/number-input';
import GroupInput from './inputs/group-input';
import { FORM_TYPES } from '../utils/constant/index';

const FormInput = ({ recipe, input, handleChange, handleAddItem, handleDeleteItem }) => {
    switch(input.type){
        case FORM_TYPES.text:
            return <TextInput
                name={input.name}
                label={input.label}
                type={input.type}
                value={recipe[input.name]}
                onChange={handleChange}
            />
        case FORM_TYPES.number:
            return <NumberInput
                name={input.name}
                label={input.label}
                type={input.type}
                value={recipe[input.name]}
                onChange={handleChange}
            />
        case FORM_TYPES.group:
            return <GroupInput
                name={input.name}
                label={input.label}
                type={input.type}
                inputs={input.inputs}
                values={recipe[input.name]}
                onChange={handleChange}
                handleAddItem={handleAddItem}
                handleDeleteItem={handleDeleteItem}
            />
        default:
            return;
    }
}

export default FormInput;