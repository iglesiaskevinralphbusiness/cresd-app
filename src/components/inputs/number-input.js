import React from "react";

const NumberInput = ({ name, label, type, ...others }) => {
	return (
		<div className="form-group">
		<label htmlFor={name}>{label}</label>
		<input
			{...others}
			name={name}
			id={name}
			type='number'
			className='form-control'
			min="0"
		/>
		</div>
	);
};

export default NumberInput;