import React from "react";

const TextInput = ({ name, label, value, list, ...others }) => {
	return (
		<div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select 
                className="form-control"
                {...others}
                name={name}
                id={name}
                value={value.toString()}
            >
                {
                    list?.map((l, index) => <option value={l.value.toString()} key={index}>{l.label}</option>)
                }
            </select>
		</div>
	);
};

export default TextInput;