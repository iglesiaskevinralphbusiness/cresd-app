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
		/>
		</div>
	);
};

export default NumberInput;