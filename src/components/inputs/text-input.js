import React from "react";

const TextInput = ({ name, label, type, ...others }) => {
	return (
		<div className="form-group">
		<label htmlFor={name}>{label}</label>
		<input
			{...others}
			name={name}
			id={name}
			type={type}
			className="form-control"
		/>
		</div>
	);
};

export default TextInput;