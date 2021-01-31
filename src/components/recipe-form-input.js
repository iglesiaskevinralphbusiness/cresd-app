import React from "react";
import TextInput from  './inputs/text-input';
import NumberInput from './inputs/number-input';
import GroupInput from './inputs/group-input';
import SelectInput from './inputs/select-input';
import { FORM_TYPES } from '../utils/constant/index';
import { IAny, IArray, IFunc } from '../models/models';

const FormInput = ({ input, handleChange, handleAddItem, handleDeleteItem }) => {
    switch(input.type){
        case FORM_TYPES.text:
            return <TextInput
                name={input.name}
                label={input.label}
                type={input.type}
                value={input.value}
                onChange={handleChange}
            />
        case FORM_TYPES.number:
            return <NumberInput
                name={input.name}
                label={input.label}
                type={input.type}
                value={input.value}
                onChange={handleChange}
            />
        case FORM_TYPES.group:
            return <GroupInput
                name={input.name}
                label={input.label}
                type={input.type}
                inputs={input.inputs}
                values={input.value}
                onChange={handleChange}
                handleAddItem={handleAddItem}
                handleDeleteItem={handleDeleteItem}
            />
        case FORM_TYPES.select:
            return <SelectInput
                name={input.name}
                label={input.label}
                inputs={input.inputs}
                value={input.value}
                onChange={handleChange}
                list={input.list}
            />
        default:
            return null;
    }
}

FormInput.propTypes  = {
    input: IAny,
    list: IArray,
    handleChange: IFunc,
    handleAddItem: IFunc,
    handleDeleteItem: IFunc,
}


export default FormInput;