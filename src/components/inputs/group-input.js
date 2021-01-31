import React from "react";
import FormInput from '../recipe-form-input';
import { FORM_TYPES } from '../../utils/constant/index';

const ListInput = ({ index, name, value, inputs, onChange, handleDeleteItem }) => {
    return (
        <div className="row g-3">
            {
                inputs.map(input => {
                    const child = input.name;
                    const currentValue = input.type === FORM_TYPES.number ? value[child] ? value[child] : 0 : value[child];
                    input.value = currentValue;
                    return (
                        <div className="col-sm"  key={input.name}>
                            <FormInput input={input} list={input.list} handleChange={(e) => onChange(e, { name, child, index })} />
                        </div>
                    )
                })
            }
            <div className="col-sm">
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteItem(name, index)}>x</button>    
            </div>
        </div>
    );
}

const GroupInput = ({ name, label, inputs, values, onChange, handleAddItem, handleDeleteItem }) => {
	return (
        <div className="form-group">
            <label>{label}</label>
            <div className="pl-5 pr-5">
                {
                    values.map((value, index) => {
                        return <ListInput 
                            name={name}
                            inputs={inputs}
                            value={value}
                            onChange={onChange}
                            key={index}
                            index={index}
                            handleDeleteItem={handleDeleteItem}
                        />
                    })
                }
                <button type="button" className="btn btn-primary" onClick={() => handleAddItem(name)}>Add Item</button>    
            </div>
        </div>
	);
};

export default GroupInput;