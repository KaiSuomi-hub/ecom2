import React from 'react';
import './form-input.styles.css'
//Remember, this is functional component
//meaning that state doesn't live in it
const FormInput = ({ handleChange, label, ...otherProps }) => (
//it does handle props though
	<div className="group">
		<input
			className="form-input"
			onChange={handleChange} {...otherProps}
			//here we divert to handleChange function which changes state of firebase.jsx
		/>
		{/* here we add a class shrink if there is input in the fields.*/}
		{/* We also have always class form-etc */}
		{label ? (
			<label
		className={`${
		otherProps.value.length ? 'shrink' : ''
		} form-input-label`}
		>
			{label}	{/* here we render a label if we pass one on */}
		</label>
		) : null}	{/* if nothing is provided we render null */}
</div>
);


export default FormInput;